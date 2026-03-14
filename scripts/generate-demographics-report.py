#!/usr/bin/env python3
"""
Generate Gen AI to Z demographics report with tables and charts.
Outputs: PDF + PNG files in reports/ directory.

Usage:
  python3 scripts/generate-demographics-report.py
"""

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
import matplotlib.patches as mpatches
from datetime import datetime
import os

# ─── Data (from Supabase queries, March 12 2026) ───

TOTAL_REGISTRANTS = 571
CONFIRMED = 497
PENDING = 74
REPORT_DATE = "March 12, 2026"

AFFILIATION_DATA = [
    ("College Student", 445, 77.9),
    ("Professional", 63, 11.0),
    ("Other", 26, 4.6),
    ("Career Shifter", 16, 2.8),
    ("Faculty/Staff", 10, 1.8),
    ("Independent Creator", 7, 1.2),
    ("Senior High Student", 4, 0.7),
]

HOW_HEARD_DATA = [
    ("Friend/Colleague", 192, 33.6),
    ("Social Media", 184, 32.2),
    ("Not specified", 90, 15.8),
    ("University Announcement", 40, 7.0),
    ("Other", 33, 5.8),
    ("Email", 24, 4.2),
    ("Website", 8, 1.4),
]

SCHOOL_DATA = [
    ("PUP", 62),
    ("TIP", 37),
    ("Mapua / MCL", 33),
    ("NU Manila", 32),
    ("UP Diliman", 26),
    ("EARIST", 23),
    ("URS Binangonan", 21),
    ("UST", 20),
    ("DLSU", 14),
    ("CvSU", 13),
    ("ICCT Colleges", 12),
    ("St. Clare College", 10),
    ("QCU", 9),
    ("TUP", 9),
    ("Col. de San Gabriel Arcangel", 8),
    ("University of the East", 8),
    ("STI", 7),
    ("St. Dominic College of Asia", 7),
    ("Phil. Christian University", 6),
    ("FEU Tech", 5),
    ("RTU", 5),
    ("Bulacan State University", 4),
    ("PHINMA", 4),
    ("New Era University", 4),
    ("UMak", 4),
    ("Pam. ng Lungsod ng Pasig", 3),
    ("Universidad De Manila", 3),
    ("Arellano University", 3),
    ("PLM", 2),
    ("Gordon College", 2),
    ("OLPSC", 2),
    ("Univ. of Caloocan City", 2),
    ("Other Schools (18 schools)", 18),
]

# ─── Styling ───

DARK_BG = "#0f0f14"
CARD_BG = "#1a1a24"
TEXT_COLOR = "#e4e4e7"
MUTED_COLOR = "#a1a1aa"
PURPLE = "#8b5cf6"
PURPLE_LIGHT = "#c084fc"
PINK = "#d946ef"
CYAN = "#06b6d4"
RED = "#f87171"
AMBER = "#fbbf24"
GREEN = "#4ade80"

GRADIENT_COLORS = ["#8b5cf6", "#9333ea", "#a855f7", "#c084fc", "#d946ef", "#ec4899", "#06b6d4"]

def get_bar_colors(n):
    """Generate a gradient-like color palette."""
    base = ["#8b5cf6", "#7c3aed", "#a855f7", "#c084fc", "#d946ef",
            "#ec4899", "#06b6d4", "#0891b2", "#14b8a6", "#f59e0b",
            "#f97316", "#ef4444", "#64748b", "#94a3b8", "#6366f1",
            "#8b5cf6", "#7c3aed", "#a855f7", "#c084fc", "#d946ef",
            "#ec4899", "#06b6d4", "#0891b2", "#14b8a6", "#f59e0b",
            "#f97316", "#ef4444", "#64748b", "#94a3b8", "#6366f1",
            "#8b5cf6", "#7c3aed", "#a855f7"]
    return base[:n]


def setup_figure(figsize=(16, 10)):
    fig = plt.figure(figsize=figsize, facecolor=DARK_BG)
    return fig


def add_title_page(pdf):
    fig = setup_figure((16, 10))
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_facecolor(DARK_BG)
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')

    # Title
    ax.text(0.5, 0.65, "Gen AI to Z", fontsize=52, fontweight='bold',
            color=PURPLE_LIGHT, ha='center', va='center', fontfamily='sans-serif')
    ax.text(0.5, 0.55, "A Career Summit in an AI-Driven World", fontsize=20,
            color=MUTED_COLOR, ha='center', va='center', fontfamily='sans-serif')
    ax.text(0.5, 0.42, "Registrant Demographics Report", fontsize=28, fontweight='bold',
            color=TEXT_COLOR, ha='center', va='center', fontfamily='sans-serif')

    # Stats
    ax.text(0.3, 0.28, f"{TOTAL_REGISTRANTS}", fontsize=48, fontweight='bold',
            color=PURPLE, ha='center', va='center')
    ax.text(0.3, 0.21, "Total Registrants", fontsize=14, color=MUTED_COLOR,
            ha='center', va='center')

    ax.text(0.5, 0.28, f"{CONFIRMED}", fontsize=48, fontweight='bold',
            color=GREEN, ha='center', va='center')
    ax.text(0.5, 0.21, "Confirmed", fontsize=14, color=MUTED_COLOR,
            ha='center', va='center')

    ax.text(0.7, 0.28, f"{PENDING}", fontsize=48, fontweight='bold',
            color=AMBER, ha='center', va='center')
    ax.text(0.7, 0.21, "Pending", fontsize=14, color=MUTED_COLOR,
            ha='center', va='center')

    # Footer
    ax.text(0.5, 0.08, f"Report generated: {REPORT_DATE}", fontsize=12,
            color=MUTED_COLOR, ha='center', va='center', style='italic')
    ax.text(0.5, 0.04, "David M. Consunji Theater, ICE, UP Diliman  •  March 17, 2026",
            fontsize=12, color=MUTED_COLOR, ha='center', va='center')

    pdf.savefig(fig, facecolor=DARK_BG)
    plt.close(fig)


def add_affiliation_page(pdf):
    fig = setup_figure((16, 10))
    gs = fig.add_gridspec(1, 2, width_ratios=[1.1, 1], wspace=0.3,
                          left=0.06, right=0.96, top=0.85, bottom=0.08)

    # ── Horizontal Bar Chart ──
    ax1 = fig.add_subplot(gs[0])
    ax1.set_facecolor(CARD_BG)

    labels = [a[0] for a in AFFILIATION_DATA][::-1]
    values = [a[1] for a in AFFILIATION_DATA][::-1]
    pcts = [a[2] for a in AFFILIATION_DATA][::-1]
    colors = get_bar_colors(len(labels))[::-1]

    bars = ax1.barh(labels, values, color=colors, height=0.6, edgecolor='none')

    for bar, val, pct in zip(bars, values, pcts):
        ax1.text(bar.get_width() + 3, bar.get_y() + bar.get_height()/2,
                 f'{val}  ({pct}%)', va='center', fontsize=11, color=TEXT_COLOR)

    ax1.set_xlim(0, max(values) * 1.35)
    ax1.tick_params(axis='y', colors=TEXT_COLOR, labelsize=11)
    ax1.tick_params(axis='x', colors=MUTED_COLOR, labelsize=9)
    ax1.spines['top'].set_visible(False)
    ax1.spines['right'].set_visible(False)
    ax1.spines['bottom'].set_color(MUTED_COLOR)
    ax1.spines['left'].set_color(MUTED_COLOR)
    ax1.set_title('Registrants by Affiliation', fontsize=16, fontweight='bold',
                  color=TEXT_COLOR, pad=15)

    # ── Donut Chart ──
    ax2 = fig.add_subplot(gs[1])
    ax2.set_facecolor(DARK_BG)

    pie_labels = [a[0] for a in AFFILIATION_DATA]
    pie_values = [a[1] for a in AFFILIATION_DATA]
    pie_colors = get_bar_colors(len(pie_labels))

    wedges, texts, autotexts = ax2.pie(
        pie_values, labels=None, colors=pie_colors,
        autopct=lambda p: f'{p:.1f}%' if p > 3 else '',
        pctdistance=0.78, startangle=90,
        wedgeprops=dict(width=0.42, edgecolor=DARK_BG, linewidth=2)
    )

    for t in autotexts:
        t.set_color('white')
        t.set_fontsize(10)
        t.set_fontweight('bold')

    # Center text
    ax2.text(0, 0.05, str(TOTAL_REGISTRANTS), fontsize=32, fontweight='bold',
             color=PURPLE_LIGHT, ha='center', va='center')
    ax2.text(0, -0.08, 'Total', fontsize=12, color=MUTED_COLOR, ha='center', va='center')

    # Legend
    legend_handles = [mpatches.Patch(facecolor=c, label=f'{l} ({v})')
                      for l, v, c in zip(pie_labels, pie_values, pie_colors)]
    ax2.legend(handles=legend_handles, loc='lower center', bbox_to_anchor=(0.5, -0.15),
               ncol=2, fontsize=9, facecolor=CARD_BG, edgecolor=MUTED_COLOR,
               labelcolor=TEXT_COLOR, framealpha=0.9)

    ax2.set_title('Distribution', fontsize=16, fontweight='bold',
                  color=TEXT_COLOR, pad=15)

    # Page title
    fig.suptitle('Demographics by Affiliation', fontsize=22, fontweight='bold',
                 color=PURPLE_LIGHT, y=0.95, fontfamily='sans-serif')

    pdf.savefig(fig, facecolor=DARK_BG)
    plt.close(fig)


def add_how_heard_page(pdf):
    fig = setup_figure((16, 10))
    gs = fig.add_gridspec(1, 2, width_ratios=[1.1, 1], wspace=0.3,
                          left=0.08, right=0.96, top=0.85, bottom=0.08)

    # ── Horizontal Bar Chart ──
    ax1 = fig.add_subplot(gs[0])
    ax1.set_facecolor(CARD_BG)

    labels = [h[0] for h in HOW_HEARD_DATA][::-1]
    values = [h[1] for h in HOW_HEARD_DATA][::-1]
    pcts = [h[2] for h in HOW_HEARD_DATA][::-1]

    bar_colors = [CYAN, RED, AMBER, "#64748b", PINK, PURPLE, GREEN][::-1]

    bars = ax1.barh(labels, values, color=bar_colors, height=0.6, edgecolor='none')

    for bar, val, pct in zip(bars, values, pcts):
        ax1.text(bar.get_width() + 3, bar.get_y() + bar.get_height()/2,
                 f'{val}  ({pct}%)', va='center', fontsize=11, color=TEXT_COLOR)

    ax1.set_xlim(0, max(values) * 1.35)
    ax1.tick_params(axis='y', colors=TEXT_COLOR, labelsize=11)
    ax1.tick_params(axis='x', colors=MUTED_COLOR, labelsize=9)
    ax1.spines['top'].set_visible(False)
    ax1.spines['right'].set_visible(False)
    ax1.spines['bottom'].set_color(MUTED_COLOR)
    ax1.spines['left'].set_color(MUTED_COLOR)
    ax1.set_title('How Did You Hear About Us?', fontsize=16, fontweight='bold',
                  color=TEXT_COLOR, pad=15)

    # ── Donut Chart ──
    ax2 = fig.add_subplot(gs[1])
    ax2.set_facecolor(DARK_BG)

    pie_colors = [GREEN, PURPLE, "#64748b", AMBER, PINK, CYAN, RED]
    pie_values = [h[1] for h in HOW_HEARD_DATA]

    wedges, texts, autotexts = ax2.pie(
        pie_values, labels=None, colors=pie_colors,
        autopct=lambda p: f'{p:.1f}%' if p > 4 else '',
        pctdistance=0.78, startangle=90,
        wedgeprops=dict(width=0.42, edgecolor=DARK_BG, linewidth=2)
    )

    for t in autotexts:
        t.set_color('white')
        t.set_fontsize(10)
        t.set_fontweight('bold')

    ax2.text(0, 0.05, '65.8%', fontsize=28, fontweight='bold',
             color=GREEN, ha='center', va='center')
    ax2.text(0, -0.1, 'Word of Mouth\n+ Social Media', fontsize=9,
             color=MUTED_COLOR, ha='center', va='center')

    legend_handles = [mpatches.Patch(facecolor=c, label=f'{HOW_HEARD_DATA[i][0]} ({HOW_HEARD_DATA[i][1]})')
                      for i, c in enumerate(pie_colors)]
    ax2.legend(handles=legend_handles, loc='lower center', bbox_to_anchor=(0.5, -0.15),
               ncol=2, fontsize=9, facecolor=CARD_BG, edgecolor=MUTED_COLOR,
               labelcolor=TEXT_COLOR, framealpha=0.9)

    ax2.set_title('Distribution', fontsize=16, fontweight='bold',
                  color=TEXT_COLOR, pad=15)

    fig.suptitle('How Did You Hear About Us?', fontsize=22, fontweight='bold',
                 color=PURPLE_LIGHT, y=0.95, fontfamily='sans-serif')

    pdf.savefig(fig, facecolor=DARK_BG)
    plt.close(fig)


def add_school_chart_page(pdf):
    """Top 20 schools as horizontal bar chart."""
    fig = setup_figure((16, 12))
    ax = fig.add_axes([0.25, 0.08, 0.68, 0.82])
    ax.set_facecolor(CARD_BG)

    # Top 20 only (excluding "Other Schools" and "Tech Community")
    school_chart = [(s, v) for s, v in SCHOOL_DATA if "Other" not in s][:20]
    labels = [s[0] for s in school_chart][::-1]
    values = [s[1] for s in school_chart][::-1]
    colors = get_bar_colors(len(labels))[::-1]

    bars = ax.barh(labels, values, color=colors, height=0.65, edgecolor='none')

    for bar, val in zip(bars, values):
        ax.text(bar.get_width() + 0.5, bar.get_y() + bar.get_height()/2,
                str(val), va='center', fontsize=11, color=TEXT_COLOR, fontweight='bold')

    ax.set_xlim(0, max(values) * 1.15)
    ax.tick_params(axis='y', colors=TEXT_COLOR, labelsize=10)
    ax.tick_params(axis='x', colors=MUTED_COLOR, labelsize=9)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_color(MUTED_COLOR)
    ax.spines['left'].set_color(MUTED_COLOR)

    fig.suptitle('Top 20 Schools by Registrants', fontsize=22, fontweight='bold',
                 color=PURPLE_LIGHT, y=0.97, fontfamily='sans-serif')

    ax.text(max(values) * 0.5, len(labels) + 0.5,
            f'449 total student registrants across 50+ schools',
            fontsize=11, color=MUTED_COLOR, ha='center', va='center', style='italic')

    pdf.savefig(fig, facecolor=DARK_BG)
    plt.close(fig)


def add_school_table_page(pdf):
    """Full school table."""
    fig = setup_figure((16, 14))
    ax = fig.add_axes([0.05, 0.03, 0.9, 0.88])
    ax.set_facecolor(DARK_BG)
    ax.axis('off')

    fig.suptitle('Full School Breakdown', fontsize=22, fontweight='bold',
                 color=PURPLE_LIGHT, y=0.97, fontfamily='sans-serif')

    # Split into 2 columns
    mid = (len(SCHOOL_DATA) + 1) // 2
    col1 = SCHOOL_DATA[:mid]
    col2 = SCHOOL_DATA[mid:]

    def draw_table_column(data, x_start, rank_start):
        y = 0.95
        row_h = 0.052

        # Header
        ax.text(x_start, y, '#', fontsize=10, fontweight='bold', color=PURPLE,
                transform=ax.transAxes, va='center')
        ax.text(x_start + 0.04, y, 'School', fontsize=10, fontweight='bold', color=PURPLE,
                transform=ax.transAxes, va='center')
        ax.text(x_start + 0.38, y, 'Count', fontsize=10, fontweight='bold', color=PURPLE,
                transform=ax.transAxes, va='center', ha='right')

        y -= 0.01
        ax.plot([x_start, x_start + 0.40], [y, y], color=PURPLE, alpha=0.3,
                linewidth=1, transform=ax.transAxes)

        for i, (school, count) in enumerate(data):
            y -= row_h
            rank = rank_start + i
            bg_alpha = 0.06 if i % 2 == 0 else 0

            if bg_alpha > 0:
                rect = plt.Rectangle((x_start - 0.01, y - row_h/2.5),
                                     0.42, row_h * 0.85,
                                     transform=ax.transAxes,
                                     facecolor='white', alpha=bg_alpha)
                ax.add_patch(rect)

            # Highlight top 3
            rank_color = AMBER if rank <= 3 else MUTED_COLOR
            name_color = TEXT_COLOR if rank <= 10 else MUTED_COLOR

            ax.text(x_start, y, str(rank), fontsize=10, color=rank_color,
                    fontweight='bold' if rank <= 3 else 'normal',
                    transform=ax.transAxes, va='center')
            ax.text(x_start + 0.04, y, school, fontsize=10, color=name_color,
                    transform=ax.transAxes, va='center')
            ax.text(x_start + 0.38, y, str(count), fontsize=11, color=TEXT_COLOR,
                    fontweight='bold', transform=ax.transAxes, va='center', ha='right')

    draw_table_column(col1, 0.05, 1)
    draw_table_column(col2, 0.52, mid + 1)

    # Divider line
    ax.plot([0.48, 0.48], [0.0, 0.96], color=PURPLE, alpha=0.15,
            linewidth=1, transform=ax.transAxes)

    pdf.savefig(fig, facecolor=DARK_BG)
    plt.close(fig)


def main():
    out_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'reports')
    os.makedirs(out_dir, exist_ok=True)

    pdf_path = os.path.join(out_dir, 'gen-ai-to-z-demographics-report.pdf')
    print(f"\n📊 Generating Gen AI to Z Demographics Report...\n")

    with PdfPages(pdf_path) as pdf:
        print("   ✅ Title page")
        add_title_page(pdf)

        print("   ✅ Affiliation demographics (chart + donut)")
        add_affiliation_page(pdf)

        print("   ✅ How did you hear about us (chart + donut)")
        add_how_heard_page(pdf)

        print("   ✅ Top 20 schools (bar chart)")
        add_school_chart_page(pdf)

        print("   ✅ Full school breakdown (table)")
        add_school_table_page(pdf)

    print(f"\n📄 PDF saved: {pdf_path}")

    # Also export individual pages as PNGs
    png_dir = os.path.join(out_dir, 'png')
    os.makedirs(png_dir, exist_ok=True)

    pages = [
        ("01-title", add_title_page),
        ("02-affiliation", add_affiliation_page),
        ("03-how-heard", add_how_heard_page),
        ("04-schools-chart", add_school_chart_page),
        ("05-schools-table", add_school_table_page),
    ]

    for name, func in pages:
        # Create a temporary PDF pages context since functions expect it
        fig_path = os.path.join(png_dir, f'{name}.png')

        class FakePdf:
            def savefig(self, fig, **kwargs):
                fig.savefig(fig_path, facecolor=kwargs.get('facecolor', DARK_BG),
                            dpi=200, bbox_inches='tight', pad_inches=0.3)

        func(FakePdf())

    print(f"🖼️  PNGs saved: {png_dir}/")
    print(f"\n   Files:")
    for f in sorted(os.listdir(png_dir)):
        print(f"   • {f}")
    print()


if __name__ == '__main__':
    main()
