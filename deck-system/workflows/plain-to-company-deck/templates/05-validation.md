# 05 Validation

## Format Validation

- [ ] Parent base format is explicit: `plain-neutral` or `plain-business-ppt`.
- [ ] Company-specific styling lives in `deck-system/formats/<format-id>/`.
- [ ] Logo placement follows the format pack.
- [ ] Fonts and colors follow the format pack.
- [ ] Section dividers and closing slides match the format pack.
- [ ] If parent is `plain-business-ppt`, header, title, optional lead, body, table, label, generated-image, and footnote slots remain explicit through `data-*` metadata.
- [ ] If parent is `plain-business-ppt`, the body group is vertically centered inside the available body zone between lead/title and footer.
- [ ] If parent is `plain-business-ppt`, the body group uses enough of the available body zone and does not look like a small island on blank paper.
- [ ] If parent is `plain-business-ppt`, visible slide content does not include helper role labels such as title/body/lead markers.
- [ ] If a body region is generated with `image2`, the title and short body context remain editable HTML text.

## Content Validation

- [ ] One slide has one message.
- [ ] Slide body text is short enough for screen sharing.
- [ ] Speaker notes hold details that should not be on the slide.
- [ ] Claims, numbers, and examples are sourced or marked as assumptions.

## Render Validation

- [ ] No clipped text.
- [ ] No internal scrollbars.
- [ ] PDF export preserves page breaks and layout.
- [ ] Mobile/preview page remains readable where applicable.

## Open Issues

- TBD
