# Kikai Collab Seminar Bold Depth Quality Audit

This file inherits the source deck quality decisions and adds a page-by-page depth pass for the separate bold-depth comparison version. The slide count and source content stay fixed at 34 slides; the visual treatment changes globally without overwriting the existing bold deck.

## Bold Depth Variant Pass

- Larger title, lead, card-heading, and body text hierarchy.
- Kikai logo orange `#FC754A` as the primary accent with `#FEF8F6` as the soft surface color.
- Stronger card borders, layered background tones, and shadows for boxes, images, and key objects.
- More visible image usage on the cover, divider, route, coverage, risk, and closing slides.
- SVG usage expanded through the global slide pattern and card-level visual marks.
- Generic bar-chart-like decorations are removed or suppressed on pages where they did not carry meaning.
- The original `kikai-collab-seminar-business-ppt-bold` deck remains unchanged for side-by-side comparison.

## 2026-05-22 Production Cleanup

- Removed the cover placeholder (`〇〇様向け`) and format label from P01.
- Flattened remaining card/core backgrounds that still rendered as gradients.
- Removed residual image/SVG object frames and shadows on P05, P10, P28, and P33 while preserving card-side depth.
- Kept P25's community visual as a low-opacity image layer without using a gradient card background.

## 2026-05-23 Reviewer Cleanup

- Set outer card borders thinner than nested card borders.
- Added targeted inner spacing fixes for profile, table, chapter-anchor, route, and coverage cards.
- Aligned nested card hue families in P06 and P26 so parent/child borders and fills do not mix orange, blue, and green unintentionally.
- Reset P10 chapter-anchor inner text spans so they do not become accidental nested cards.

## 2026-05-24 Follow-up Cleanup

- Reduced nested card borders by 1pt while keeping them slightly stronger than outer cards.
- Stretched the P18 metric/funnel body and P20 route cards so those layouts use the lower body space more intentionally.
- Removed residual media-side frames, pseudo decorations, shadows, and filters; image containers now crop generated image edges slightly so baked-in image borders do not create a second frame inside cards.

## Audit Criteria

- image_need: 情報密度を上げるために画像・図解が必要か
- image_fit: 既存画像がコアメッセージを助けているか
- layout_fit: 現在のレイアウトがメッセージに合っているか
- action: 実施した変更または維持判断

## Slide Decisions

| Slide | image_need | image_fit | layout_fit | action |
|---|---|---|---|---|
| P01 | Logo only | Appropriate | Cover is clear | Keep |
| P02 | No extra image | Header logo only is enough | Profile + metrics works | Keep |
| P03 | Not needed | Header logo only is enough | 3 goal cards fit | Keep |
| P04 | Not needed | Header logo only is enough | Commodity map explains shift | Keep |
| P05 | Not needed | Header logo only is enough | Two-path comparison fits | Keep |
| P06 | Not needed | Header logo only is enough | Amplifier model fits | Keep |
| P07 | Useful | Existing product image is meaningful | Visual + evidence strip fits | Keep |
| P08 | Not needed | Header logo only is enough | Dense comparison table fits | Keep |
| P09 | Not needed | Header logo only is enough | Statement + evidence strip fits | Keep |
| P10 | Not needed | Header logo only is enough | Section divider is intentional | Keep |
| P11 | Useful | Existing workbench image is meaningful | Visual + input checklist fits | Keep |
| P12 | Not needed | Header logo only is enough | Needed stronger criteria | Added implementation judgment strip |
| P13 | Useful | Existing product-case board is meaningful | Product board fits after sizing fix | Keep |
| P14 | Not needed | Header logo only is enough | Before/after change board fits | Keep |
| P15 | Not needed | Header logo only is enough | 4-card capability layout fits | Keep |
| P16 | Not needed | Header logo only is enough | Case proof cards fit | Keep |
| P17 | Image not needed | Previous image was too atmospheric | Needed reality-check logic | Replaced image with structured reality board |
| P18 | Not needed | Header logo only is enough | Metric + funnel layout fits | Keep |
| P19 | Not needed | Header logo only is enough | Accumulation board fits | Keep |
| P20 | Not needed | Header logo only is enough | Route system fits | Keep |
| P21 | Not needed | Header logo only is enough | Problem board fits | Keep |
| P22 | Not needed | Inline SVG app visuals are enough | Case catalog fits | Keep |
| P23 | Not needed | Header logo only is enough | Origin timeline fits | Keep |
| P24 | Not needed | Header logo only is enough | Revenue proof board fits | Keep |
| P25 | Not needed | Header logo only is enough | Objection handling layout fits | Keep |
| P26 | Not needed | Header logo only is enough | Community case board fits | Keep |
| P27 | Not needed | Header logo only is enough | Support loop fits | Keep |
| P28 | Useful | Existing community image is meaningful | Visual + evidence strip fits | Keep |
| P29 | Not needed | Header logo only is enough | Coverage route fits | Keep |
| P30 | Not needed | SVG icons are enough | Package system fits | Keep |
| P31 | Diagram needed | Previous risk SVG was too abstract | Quality gate needed clearer risk map | Replaced risk visual with bug/security/operation board |
| P32 | Not needed | Header logo only is enough | Pipeline roadmap fits | Keep |
| P33 | Useful | Existing marketplace UI image is meaningful | Visual + sales strip fits | Keep |
| P34 | Not needed | Header logo only is enough | Before/after closing fits | Keep |
