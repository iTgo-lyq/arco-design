`````
Component / Data Display

# Popover

A floating card popped by hovering, focusing, or clicking on a element.
`````

%%Content%%

## API

### Popover

|Property|Description|Type|DefaultValue|Version|
|---|---|---|---|---|
|blurToHide|Whether close the popup when the target element losing focus|boolean |`true`|-|
|defaultPopupVisible|Whether the popup is visible by default|boolean |`-`|-|
|disabled|Whether to disabled|boolean |`-`|2.11.0|
|popupHoverStay|Whether the popup is visible when the mouse hovers over the popup|boolean |`true`|-|
|popupVisible|Whether the popup is visible|boolean |`-`|-|
|unmountOnExit|Whether to destroy the popup when hidden|boolean |`true`|-|
|childrenPrefix|Set an additional class name(`${childrenPrefix}-open`) for the container of the popup.|string |`-`|-|
|color|background color of the popup-layer|string |`-`|2.22.0|
|position|The position of the popup relative to the target.|\| 'top'\| 'tl'\| 'tr'\| 'bottom'\| 'bl'\| 'br'\| 'left'\| 'lt'\| 'lb'\| 'right'\| 'rt'\| 'rb' |`top`|-|
|trigger|Trigger mode|[TriggerProps](trigger#trigger)['trigger'] |`hover`|-|
|content|The content shown in popup|ReactNode |`-`|-|
|className|Additional css class|string \| string[] |`-`|-|
|style|Additional style|CSSProperties |`-`|-|
|triggerProps|The Props of the `Trigger` component|Partial&lt;[TriggerProps](trigger#trigger)&gt; |`-`|-|
|getPopupContainer|The parent node which the popup will be rendered to.|(node: HTMLElement) => Element |`-`|-|
|onVisibleChange|Callback when the visibility of the popup is changed|(visible: boolean) => void |`-`|-|
|title|Title of the popup card. Function types are supported in `2.48.0`|ReactNode \| (() => ReactNode) |`-`|-|
