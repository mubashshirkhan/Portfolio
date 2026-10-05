"use client";

import { useEffect, useMemo, useState } from "react";
import type { ContributionCalendar, ContributionDay } from "../lib/github";

const years = [2025, 2026] as const;
function dayLabel(day: ContributionDay) {
  return `${new Date(`${day.date}T00:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}: ${day.contributionCount ? `${day.contributionCount} contributions` : "no contributions"}`;
}

export function ContributionGraph() {
  const [year, setYear] = useState<(typeof years)[number]>(2026);
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<ContributionDay | null>(null);
  useEffect(() => {
    let active = true;
    setCalendar(null); setError("");
    fetch(`/api/github/contributions?year=${year}`).then(async (res) => {
      const data = await res.json() as ContributionCalendar & { error?: string };
      if (!res.ok) throw new Error(data.error || "Unable to load GitHub contributions right now.");
      if (active) setCalendar(data);
    }).catch((err: unknown) => { if (active) setError(err instanceof Error ? err.message : "Unable to load GitHub contributions right now."); });
    return () => { active = false; };
  }, [year]);
  const cells = useMemo(() => calendar?.weeks.flatMap((week) => week.contributionDays) ?? [], [calendar]);
  const maximumContributions = useMemo(() => Math.max(...cells.map((day) => day.contributionCount), 1), [cells]);
  return <section id="contribution" className="section contribution-section" aria-labelledby="contribution-title">
    <div className="section-heading"><p className="eyebrow">Open source activity</p><h2 id="contribution-title">Contribution Graph</h2><p className="section-intro">A snapshot of my work and learning in public.</p></div>
    <div className="contribution-card">
      <div className="contribution-top"><div><strong>{calendar ? calendar.totalContributions.toLocaleString() : "—"}</strong><span> contributions in {year}</span></div><div className="year-buttons">{years.map((item) => <button type="button" key={item} onClick={() => setYear(item)} aria-pressed={year === item} className={year === item ? "active" : ""}>{item}</button>)}</div></div>
      {error ? <div className="graph-state" role="status">{error}<small>Configure the server-side GitHub variables to enable live activity.</small></div> : !calendar ? <div className="graph-state" role="status">Loading contributions...</div> : cells.length === 0 ? <div className="graph-state">No contribution data is available for this period.</div> : <div className="graph-scroll"><div className="graph-grid" role="group" aria-label={`${year} GitHub contributions`}><div className="weekday-labels"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="weeks">{calendar.weeks.map((week) => <div className="week" key={week.firstDay}>{week.contributionDays.map((day) => <button className="cell" key={day.date} type="button" aria-label={dayLabel(day)} title={dayLabel(day)} onClick={() => setSelected(selected?.date === day.date ? null : day)} style={{ "--contribution-opacity": day.contributionCount === 0 ? 0.12 : 0.25 + (day.contributionCount / maximumContributions) * 0.75 } as React.CSSProperties} />)}</div>)}</div></div></div>}
      {selected && <div className="cell-detail" role="status">{dayLabel(selected)}<button type="button" onClick={() => setSelected(null)} aria-label="Close contribution detail">×</button></div>}
      {calendar && <div className="graph-legend"><span>Less</span><i className="legend-0" /><i className="legend-1" /><i className="legend-2" /><i className="legend-3" /><i className="legend-4" /><span>More</span></div>}
    </div>
  </section>;
}
