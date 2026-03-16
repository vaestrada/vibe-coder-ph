#!/usr/bin/env python3
"""
Gen AI to Z — Registration Demographics Report
Generates SOTA PDF + PNG report from /tmp/report-v3.json
"""

import json
import os
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.backends.backend_pdf import PdfPages
import numpy as np
from datetime import datetime

# ── Output ──────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
OUT_DIR = os.path.join(PROJECT_ROOT, 'reports')
os.makedirs(OUT_DIR, exist_ok=True)

# ── Load data ───────────────────────────────────────────────────────────
with open('/tmp/report-v3.json') as f:
    data = json.load(f)

summary   = data['summary']
affil     = data['affiliation']
howhear   = data['howDidYouHear']
schools   = data['schools']
orgs      = data['orgPartners']
timeline  = data['registrationTimeline']

# ── Brand palette ───────────────────────────────────────────────────────
BG_DARK       = '#0f0b1a'
BG_CARD       = '#1a1332'
TEXT_WHITE     = '#f5f0ff'
TEXT_MUTED     = '#a78bcd'
VIOLET         = '#8b5cf6'
FUCHSIA        = '#d946ef'
CYAN           = '#06b6d4'
EMERALD        = '#10b981'
AMBER          = '#f59e0b'
ROSE           = '#f43f5e'
SKY            = '#38bdf8'
LIME           = '#84cc16'
ORANGE         = '#f97316'
PINK           = '#ec4899'
INDIGO         = '#6366f1'
TEAL           = '#14b8a6'

CHART_COLORS = [VIOLET, FUCHSIA, CYAN, EMERALD, AMBER, ROSE, SKY, LIME, ORANGE, PINK, INDIGO, TEAL,
                '#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#60a5fa', '#c084fc', '#fb923c', '#2dd4bf']

BAR_GRADIENT = [VIOLET, '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95',
                FUCHSIA, '#c026d3', '#a21caf', '#86198f', '#701a75',
                CYAN, '#0891b2', '#0e7490', '#155e75', '#164e63',
                EMERALD, '#059669', '#047857', '#065f46', '#064e3b',
                AMBER, ROSE, SKY, LIME, ORANGE]

def gradient_colors(n, start_hex=VIOLET, end_hex=FUCHSIA):
    """Generate n gradient colors between start and end."""
    s = matplotlib.colors.to_rgb(start_hex)
    e = matplotlib.colors.to_rgb(end_hex)
    return [matplotlib.colors.to_hex([s[i] + (e[i]-s[i])*t/(max(n-1,1)) for i in range(3)]) for t in range(n)]

# ── Global style ────────────────────────────────────────────────────────
plt.rcParams.update({
    'figure.facecolor': BG_DARK,
    'axes.facecolor': BG_CARD,
    'text.color': TEXT_WHITE,
    'axes.labelcolor': TEXT_WHITE,
    'xtick.color': TEXT_MUTED,
    'ytick.color': TEXT_MUTED,
    'axes.edgecolor': '#2d2252',
    'grid.color': '#2d2252',
    'grid.alpha': 0.4,
    'font.family': 'sans-serif',
    'font.sans-serif': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    'font.size': 11,
})

def add_watermark(fig):
    fig.text(0.5, 0.01, 'Vibe Coders Philippines  ·  vibecoders.ph', fontsize=8,
             color=TEXT_MUTED, ha='center', alpha=0.6)

def add_title(fig, title, subtitle=None):
    fig.text(0.5, 0.95, title, fontsize=20, fontweight='bold',
             color=TEXT_WHITE, ha='center')
    if subtitle:
        fig.text(0.5, 0.91, subtitle, fontsize=11, color=TEXT_MUTED, ha='center')

# ── PAGE 1: Title + Summary ────────────────────────────────────────────
def page_title(pdf):
    fig = plt.figure(figsize=(11.69, 8.27))  # A4 landscape
    fig.patch.set_facecolor(BG_DARK)

    # Event title
    fig.text(0.5, 0.75, 'Gen AI to Z', fontsize=48, fontweight='bold',
             color=TEXT_WHITE, ha='center')
    fig.text(0.5, 0.67, 'AI Career Summit  ·  UP Diliman  ·  March 17, 2026',
             fontsize=16, color=TEXT_MUTED, ha='center')
    fig.text(0.5, 0.59, 'Registration Demographics Report',
             fontsize=22, fontweight='bold', color=FUCHSIA, ha='center')
    fig.text(0.5, 0.54, f'Generated {datetime.now().strftime("%B %d, %Y at %I:%M %p")}',
             fontsize=11, color=TEXT_MUTED, ha='center')

    # Summary stat boxes
    stats = [
        (str(summary['total']), 'Total\nRegistrants', VIOLET),
        (str(summary['confirmed']), 'Confirmed', EMERALD),
        (str(summary['pending']), 'Pending', AMBER),
        (str(len(schools)), 'Unique\nSchools', CYAN),
        (str(len(orgs)), 'Partner\nOrgs', FUCHSIA),
    ]

    box_w, box_h = 0.14, 0.18
    start_x = 0.5 - (len(stats) * (box_w + 0.02)) / 2
    for i, (val, label, col) in enumerate(stats):
        x = start_x + i * (box_w + 0.02)
        y = 0.22
        rect = mpatches.FancyBboxPatch((x, y), box_w, box_h,
                boxstyle="round,pad=0.015", facecolor=BG_CARD,
                edgecolor=col, linewidth=2, transform=fig.transFigure)
        fig.patches.append(rect)
        fig.text(x + box_w/2, y + box_h * 0.65, val, fontsize=28,
                 fontweight='bold', color=col, ha='center', va='center')
        fig.text(x + box_w/2, y + box_h * 0.25, label, fontsize=9,
                 color=TEXT_MUTED, ha='center', va='center', linespacing=1.3)

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/01-title.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── PAGE 2: Affiliation Breakdown (donut) ───────────────────────────────
def page_affiliation(pdf):
    fig, ax = plt.subplots(figsize=(11.69, 8.27))
    fig.patch.set_facecolor(BG_DARK)

    add_title(fig, 'Registrant Demographics', 'By Affiliation Type')

    labels = [a['name'] for a in affil]
    sizes  = [a['count'] for a in affil]
    colors = CHART_COLORS[:len(affil)]

    wedges, texts, autotexts = ax.pie(
        sizes, labels=None, colors=colors, autopct='',
        startangle=90, pctdistance=0.82,
        wedgeprops=dict(width=0.35, edgecolor=BG_DARK, linewidth=2)
    )

    # Center text
    ax.text(0, 0, str(summary['total']), fontsize=36, fontweight='bold',
            color=TEXT_WHITE, ha='center', va='center')
    ax.text(0, -0.12, 'registrants', fontsize=11, color=TEXT_MUTED,
            ha='center', va='center')

    # Legend with counts
    legend_labels = [f'{a["name"]}  ({a["count"]}, {a["pct"]}%)' for a in affil]
    leg = ax.legend(wedges, legend_labels, loc='center left',
                    bbox_to_anchor=(1.05, 0.5), fontsize=11,
                    frameon=False, labelcolor=TEXT_WHITE)

    ax.set_position([0.1, 0.08, 0.5, 0.78])

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/02-affiliation.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── PAGE 3: How Did You Hear (horizontal bar) ──────────────────────────
def page_howhear(pdf):
    fig, ax = plt.subplots(figsize=(11.69, 8.27))
    fig.patch.set_facecolor(BG_DARK)
    ax.set_facecolor(BG_DARK)

    add_title(fig, 'How Did You Hear About Us?', 'Discovery Channel Breakdown')

    # Reverse for bottom-to-top display
    items = list(reversed(howhear))
    names  = [h['name'] for h in items]
    counts = [h['count'] for h in items]
    pcts   = [h['pct'] for h in items]
    colors = list(reversed(gradient_colors(len(howhear), VIOLET, CYAN)))

    bars = ax.barh(names, counts, color=colors, height=0.6, edgecolor='none')

    for bar, count, pct in zip(bars, counts, pcts):
        ax.text(bar.get_width() + 3, bar.get_y() + bar.get_height()/2,
                f'{count}  ({pct}%)', va='center', fontsize=11,
                color=TEXT_WHITE, fontweight='bold')

    ax.set_xlim(0, max(counts) * 1.25)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.tick_params(axis='y', labelsize=12)
    ax.tick_params(axis='x', labelsize=9)
    ax.xaxis.set_visible(False)

    ax.set_position([0.22, 0.1, 0.65, 0.75])

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/03-howhear.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── PAGE 4: Top Schools (horizontal bar) ────────────────────────────────
def page_schools(pdf):
    top_n = min(25, len(schools))
    fig, ax = plt.subplots(figsize=(11.69, 8.27))
    fig.patch.set_facecolor(BG_DARK)
    ax.set_facecolor(BG_DARK)

    add_title(fig, f'Top {top_n} Schools', f'Out of {len(schools)} unique institutions')

    items  = list(reversed(schools[:top_n]))
    names  = [s['name'] for s in items]
    counts = [s['count'] for s in items]
    pcts   = [s['pct'] for s in items]
    colors = list(reversed(gradient_colors(top_n, VIOLET, FUCHSIA)))

    bars = ax.barh(names, counts, color=colors, height=0.7, edgecolor='none')

    for bar, count, pct in zip(bars, counts, pcts):
        ax.text(bar.get_width() + 1, bar.get_y() + bar.get_height()/2,
                f'{count}  ({pct}%)', va='center', fontsize=9,
                color=TEXT_WHITE, fontweight='bold')

    ax.set_xlim(0, max(counts) * 1.2)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.tick_params(axis='y', labelsize=9)
    ax.xaxis.set_visible(False)

    ax.set_position([0.30, 0.07, 0.60, 0.80])

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/04-schools.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── PAGE 5: All remaining schools (table) ──────────────────────────────
def page_schools_remaining(pdf):
    if len(schools) <= 25:
        return
    remaining = schools[25:]
    fig = plt.figure(figsize=(11.69, 8.27))
    fig.patch.set_facecolor(BG_DARK)

    add_title(fig, 'Other Schools', f'Remaining {len(remaining)} institutions')

    # Table
    col_labels = ['School', 'Count', '%']
    cell_text = [[s['name'], str(s['count']), f"{s['pct']}%"] for s in remaining]

    # Split into 2 columns if > 15
    mid = (len(cell_text) + 1) // 2
    left = cell_text[:mid]
    right = cell_text[mid:] if len(cell_text) > mid else []

    y_start = 0.82
    line_h = 0.025
    col_x = [0.08, 0.55]

    for col_idx, col_data in enumerate([left, right]):
        x = col_x[col_idx]
        for i, row in enumerate(col_data):
            y = y_start - i * line_h
            fig.text(x, y, row[0], fontsize=9, color=TEXT_WHITE)
            fig.text(x + 0.35, y, row[1], fontsize=9, color=VIOLET,
                     fontweight='bold', ha='right')
            fig.text(x + 0.41, y, row[2], fontsize=9, color=TEXT_MUTED, ha='right')

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/05-schools-other.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── PAGE 6: Organization Partners (horizontal bar) ─────────────────────
def page_orgs(pdf):
    fig, ax = plt.subplots(figsize=(11.69, 8.27))
    fig.patch.set_facecolor(BG_DARK)
    ax.set_facecolor(BG_DARK)

    add_title(fig, 'Organization Partners', f'{len(orgs)} partner organizations represented')

    items  = list(reversed(orgs))
    names  = [o['name'] for o in items]
    counts = [o['count'] for o in items]
    pcts   = [o['pct'] for o in items]
    colors = list(reversed(gradient_colors(len(orgs), CYAN, FUCHSIA)))

    bars = ax.barh(names, counts, color=colors, height=0.65, edgecolor='none')

    for bar, count, pct in zip(bars, counts, pcts):
        ax.text(bar.get_width() + 0.3, bar.get_y() + bar.get_height()/2,
                f'{count}  ({pct}%)', va='center', fontsize=10,
                color=TEXT_WHITE, fontweight='bold')

    ax.set_xlim(0, max(counts) * 1.25)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.tick_params(axis='y', labelsize=10)
    ax.xaxis.set_visible(False)

    ax.set_position([0.30, 0.07, 0.58, 0.80])

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/06-org-partners.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── PAGE 7: Registration Timeline ──────────────────────────────────────
def page_timeline(pdf):
    fig, ax = plt.subplots(figsize=(11.69, 8.27))
    fig.patch.set_facecolor(BG_DARK)

    add_title(fig, 'Registration Timeline', 'Cumulative registrations over time')

    dates = [datetime.strptime(t['date'], '%Y-%m-%d') for t in timeline]
    cumul = [t['cumulative'] for t in timeline]
    daily = [t['count'] for t in timeline]

    # Cumulative area fill
    ax.fill_between(dates, cumul, alpha=0.25, color=VIOLET)
    ax.plot(dates, cumul, color=VIOLET, linewidth=2.5, label='Cumulative')

    # Daily bars
    ax2 = ax.twinx()
    ax2.bar(dates, daily, width=0.8, alpha=0.5, color=FUCHSIA, label='Daily')
    ax2.set_ylabel('Daily Registrations', color=TEXT_MUTED, fontsize=10)
    ax2.tick_params(axis='y', labelcolor=TEXT_MUTED)
    ax2.spines['top'].set_visible(False)
    ax2.spines['right'].set_color('#2d2252')

    ax.set_ylabel('Cumulative Registrations', color=TEXT_MUTED, fontsize=10)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.grid(axis='y', alpha=0.2)

    # Format x-axis dates
    fig.autofmt_xdate(rotation=45)
    from matplotlib.dates import DateFormatter
    ax.xaxis.set_major_formatter(DateFormatter('%b %d'))

    # Key milestone annotations
    ax.annotate(f'{cumul[-1]} total', xy=(dates[-1], cumul[-1]),
                xytext=(15, 10), textcoords='offset points',
                fontsize=11, fontweight='bold', color=VIOLET,
                arrowprops=dict(arrowstyle='->', color=VIOLET, lw=1.5))

    # Find biggest single-day spike
    peak_idx = daily.index(max(daily))
    ax2.annotate(f'Peak: {daily[peak_idx]}', xy=(dates[peak_idx], daily[peak_idx]),
                 xytext=(15, 15), textcoords='offset points',
                 fontsize=10, fontweight='bold', color=FUCHSIA,
                 arrowprops=dict(arrowstyle='->', color=FUCHSIA, lw=1.5))

    # Legend
    from matplotlib.lines import Line2D
    handles = [Line2D([0], [0], color=VIOLET, lw=2.5, label='Cumulative'),
               mpatches.Patch(facecolor=FUCHSIA, alpha=0.5, label='Daily')]
    ax.legend(handles=handles, loc='upper left', frameon=False,
              labelcolor=TEXT_WHITE, fontsize=10)

    ax.set_position([0.1, 0.15, 0.78, 0.70])
    ax2.set_position([0.1, 0.15, 0.78, 0.70])

    add_watermark(fig)
    fig.savefig(f'{OUT_DIR}/07-timeline.png', dpi=200, bbox_inches='tight',
                facecolor=BG_DARK, pad_inches=0.3)
    pdf.savefig(fig, facecolor=BG_DARK)
    plt.close(fig)

# ── Generate all ────────────────────────────────────────────────────────
print('Generating report...')
pdf_path = f'{OUT_DIR}/GenAItoZ-Demographics-Report.pdf'

with PdfPages(pdf_path) as pdf:
    page_title(pdf)
    print('  ✓ Title page')
    page_affiliation(pdf)
    print('  ✓ Affiliation donut')
    page_howhear(pdf)
    print('  ✓ How did you hear')
    page_schools(pdf)
    print('  ✓ Top schools')
    page_schools_remaining(pdf)
    print('  ✓ Other schools')
    page_orgs(pdf)
    print('  ✓ Org partners')
    page_timeline(pdf)
    print('  ✓ Timeline')

print(f'\n✅ PDF saved: {pdf_path}')
print(f'✅ PNGs saved in: {OUT_DIR}/')
print(f'   Files:')
for f in sorted(os.listdir(OUT_DIR)):
    size = os.path.getsize(f'{OUT_DIR}/{f}')
    print(f'   - {f}  ({size/1024:.0f} KB)')
