# Rasul Novruzov Portfolio

## Goal
Build a polished, single-page personal portfolio that presents Rasul as a full-stack and AI/ML engineer, using only the supplied facts and clearly marked visual placeholders.

## What will be built
- A fixed responsive navigation with smooth links to About, Experience, Projects, Skills, Education, and Contact.
- A dramatic first screen with large name typography, an animated engineering headline, restrained neural-network visual treatment, two primary actions, and a scroll cue.
- A bento-style About area covering biography, education, interests, location, end-to-end engineering focus, and a replaceable profile-photo placeholder.
- An expandable chronological experience timeline for A.R.A.Z and 4SIM.
- Five premium project case-study cards, led by the satellite change-detection platform, with custom abstract technical artwork, category labels, technology tags, and expandable details. No fabricated links, screenshots, or metrics.
- Categorized skills with recognizable technology icon treatments and no proficiency percentages.
- Education and achievement cards using the exact supplied wording.
- A closing contact area with working email, GitHub, and LinkedIn links; the résumé control will be visibly unavailable until a file is provided.

## Visual direction
- Near-black foundation with electric violet and cyan accents, soft-white type, restrained glass surfaces, fine grid/line details, and generous editorial spacing.
- A display sans-serif paired with a highly legible body face; typography will remain bold and technical without resembling a generic template.
- Bento compositions, crisp compact cards, subtle borders, and restrained lighting rather than heavy glow.
- Purposeful motion only: headline entrance, scroll reveals, hover feedback, expandable panels, and a lightweight pointer-responsive backdrop.
- Full reduced-motion support and keyboard-visible focus states.

## Content architecture
- Store identity, navigation, experience, projects, skill groups, education, achievements, and contact links in a typed data module.
- Split the page into focused reusable sections and shared controls, including section headings, technology tags, expandable entries, project visuals, and navigation.
- Keep all visual colors, type, spacing, borders, shadows, and motion values in the central design system.

## Technical details
- Use the existing React, TypeScript, Tailwind CSS, and TanStack Start foundation; add only a lightweight animation dependency if the interaction quality needs it.
- Keep the requested one-page smooth-navigation format at `/`, with semantic landmarks and route-specific metadata.
- Use CSS and lightweight vector-style linework for abstract technical project visuals and the neural backdrop so no fake screenshots are implied.
- Preserve fast loading by avoiding stock imagery, heavy 3D, and unnecessary runtime effects.

## Verification
- Confirm the page builds without errors and every external/contact link is valid.
- Test expandable experience and project entries, smooth navigation, disabled résumé behavior, and keyboard focus.
- Inspect desktop and mobile layouts for text overflow, overlap, navigation behavior, and first-screen composition.
- Confirm reduced-motion behavior and basic accessibility semantics.
