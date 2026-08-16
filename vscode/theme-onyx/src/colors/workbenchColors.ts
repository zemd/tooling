import chroma from "chroma-js";
import type {
  ActivityBarColors,
  BaseColors,
  BreadcrumbsColors,
  DiffEditorColors,
  EditorColors,
  EditorGroupsAndTabsColors,
  EditorWidgetColors,
  GitColors,
  IntegratedTerminalColors,
  ListsAndTreesColors,
  MergeConflictsColors,
  NotificationColors,
  PeekViewColors,
  SideBarColors,
  StatusBarColors,
  TitleBarColors,
  Tokens,
  WorkbenchColors,
} from "../schemas/index.ts";

export const buildWorkbenchColors = (tokens: Tokens): WorkbenchColors => {
  const baseColors: BaseColors = {
    foreground: tokens.m3.onSurface,
  };

  const activityBar: ActivityBarColors = {
    "activityBar.foreground": chroma(tokens.m3.onSurface).brighten(0.5).hex(),
    "activityBar.background": chroma(tokens.m3.surfaceContainer).hex(),
    "activityBar.border": chroma(tokens.m3.surface).hex(),
    "activityBar.inactiveForeground": chroma(tokens.m3.onSurface).darken(1.2).hex(),
    "activityBar.activeBackground": chroma(tokens.m3.surfaceContainer).darken(0.3).alpha(0.2).hex(),
    "activityBar.activeBorder": chroma(tokens.m3.secondary).hex(),
    "activityBarBadge.foreground": chroma(tokens.m3.onPrimary).hex(),
    "activityBarBadge.background": chroma(tokens.m3.primary).hex(),
  };

  const notifications: NotificationColors = {
    // "notifications.foreground": tokens.color.gray[220],
    // "notifications.background": tokens.color.gray[900],
    // "notificationToast.border": tokens.color.gray[600],
    // "notificationsErrorIcon.foreground": tokens.color.orange[700],
    // "notificationsWarningIcon.foreground": tokens.color.orange[400],
    // "notificationsInfoIcon.foreground": tokens.color.blue[350],
    // "notificationCenter.border": tokens.color.gray[650],
    // "notificationCenterHeader.foreground": tokens.color.gray[500],
    // "notificationCenterHeader.background": tokens.color.gray[1200],
    // "notifications.border": tokens.color.blue[1200],
  };

  const peekView: PeekViewColors = {
    // "peekView.border": chroma(tokens.color.blue[500]).alpha(0.5059).hex(),
    // "peekViewEditor.background": tokens.color.blue[1000],
    // "peekViewEditorGutter.background": tokens.color.blue[900],
    // "peekViewEditor.matchHighlightBackground": chroma(tokens.color.orange[600]).alpha(0.4941).hex(),
    // "peekViewEditor.matchHighlightBorder": tokens.color.transparent,
    // "peekViewResult.background": tokens.color.gray[1500],
    // "peekViewResult.fileForeground": tokens.color.gray[200],
    // "peekViewResult.lineForeground": tokens.color.gray[300],
    // "peekViewResult.matchHighlightBackground": chroma(tokens.color.orange[500]).alpha(0.4471).hex(),
    // "peekViewResult.selectionBackground": chroma(tokens.color.blue[550]).alpha(0.2588).hex(),
    // "peekViewResult.selectionForeground": tokens.color.gray[250],
    // "peekViewTitle.background": tokens.color.gray[1600],
    // "peekViewTitleDescription.foreground": chroma(tokens.color.gray[220]).alpha(0.702).hex(),
    // "peekViewTitleLabel.foreground": tokens.color.white,
  };

  const sideBar: SideBarColors = {
    "sideBar.background": chroma(tokens.m3.surfaceContainer).hex(),
    "sideBar.foreground": chroma(tokens.m3.onSurface).darken(1).hex(),
    "sideBarSectionHeader.background": chroma(tokens.m3.surfaceContainer).brighten(0.2).hex(),
    "sideBarSectionHeader.foreground": chroma(tokens.m3.onSurface).darken(0.9).hex(),
    "sideBarSectionHeader.border": chroma(tokens.m3.surface).alpha(0.6).hex(),
    "sideBarTitle.foreground": chroma(tokens.m3.onSurface).hex(),
  };

  const listsAndTrees: ListsAndTreesColors = {
    "list.activeSelectionBackground": chroma(tokens.m3.surface).alpha(0.8).hex(),
    "list.inactiveSelectionBackground": chroma(tokens.m3.surface).alpha(0.6).hex(),
    "list.focusOutline": "#00000000",
    "list.hoverBackground": chroma(tokens.m3.surface).brighten(1).alpha(0.6).hex(),
  };

  const statusBar: StatusBarColors = {
    "statusBar.foreground": chroma(tokens.m3.onSurface).hex(),
    "statusBar.background": chroma(tokens.m3.surfaceContainer).hex(),
    "statusBar.border": chroma(tokens.m3.surface).hex(),
    // "statusBarItem.hoverBackground": tokens.panel.secondary.bg,
    // "statusBar.debuggingBackground": tokens.panel.debug.bg,
    // "statusBar.debuggingForeground": tokens.panel.debug.foreground,
    // "statusBar.noFolderBackground": tokens.panel.special1.bg,
    // "statusBar.noFolderForeground": tokens.panel.special1.foreground,
    // "statusBarItem.remoteBackground": tokens.panel.special2.bg,
    // "statusBarItem.remoteForeground": tokens.panel.special2.foreground,
  };

  const editorGroupsAndTabs: EditorGroupsAndTabsColors = {
    "editorGroupHeader.tabsBackground": chroma(tokens.m3.surfaceContainer).hex(),
    "tab.activeForeground": chroma(tokens.m3.onSurface).hex(),
    "tab.activeBackground": chroma(tokens.m3.surface).hex(),
    "tab.activeBorder": chroma(tokens.m3.surface).hex(),
    "tab.activeBorderTop": chroma(tokens.m3.primary).hex(),
    "tab.border": chroma(tokens.m3.surface).darken(0.3).hex(),
    "tab.inactiveBackground": chroma(tokens.m3.surfaceContainer).hex(),
    "tab.inactiveForeground": chroma(tokens.m3.onSurface).darken(1.2).hex(),
    "tab.hoverBackground": chroma(tokens.m3.surface).alpha(0.8).hex(),
    "tab.hoverForeground": chroma(tokens.m3.onSurface).darken(0.2).hex(),
  };

  const breadcrumbs: BreadcrumbsColors = {
    "breadcrumb.background": chroma(tokens.m3.surface).hex(),
    "breadcrumb.foreground": chroma(tokens.m3.onSurface).darken(1.5).hex(),
    "breadcrumb.focusForeground": chroma(tokens.m3.onSurface).darken(0.5).hex(),
  };

  const integratedTerminal: IntegratedTerminalColors = {
    "terminal.foreground": "#c4c8c6",
    "terminal.selectionBackground": "#6f734340",
    "terminalCursor.background": "#0087FF",
    "terminalCursor.foreground": "#e6e6e6",
    "terminal.border": "#80808059",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#4965a1",
    "terminal.ansiBrightBlack": "#4d4d4d",
    "terminal.ansiBrightBlue": "#5c86e0",
    "terminal.ansiBrightCyan": "#7fe0d3",
    "terminal.ansiBrightGreen": "#5ac220",
    "terminal.ansiBrightMagenta": "#dd8bea",
    "terminal.ansiBrightRed": "#e03c3c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#ffdbad",
    "terminal.ansiCyan": "#70aea6",
    "terminal.ansiGreen": "#51902e",
    "terminal.ansiMagenta": "#b792bd",
    "terminal.ansiRed": "#d35656",
    "terminal.ansiWhite": "#c4c8c6",
    "terminal.ansiYellow": "#f8c465",
  };

  const titleBar: TitleBarColors = {
    "titleBar.activeBackground": chroma(tokens.m3.surfaceContainer).hex(),
    "titleBar.activeForeground": chroma(tokens.m3.onSurface).hex(),
    "titleBar.inactiveBackground": chroma(tokens.m3.surfaceContainer).darken(0.2).hex(),
    "titleBar.inactiveForeground": chroma(tokens.m3.onSurface).darken(1.5).hex(),
    "titleBar.border": chroma(tokens.m3.surface).hex(),
  };

  const git: GitColors = {
    "gitDecoration.addedResourceForeground": "#0ec72f",
    "gitDecoration.conflictingResourceForeground": "#ff6000",
    "gitDecoration.deletedResourceForeground": "#c73939",
    "gitDecoration.ignoredResourceForeground": "#86868697",
    "gitDecoration.modifiedResourceForeground": "#b48a3a",
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",
  };

  const diffEditor: DiffEditorColors = {
    "diffEditor.insertedTextBackground": "#0a6f0b34",
    "diffEditor.removedTextBackground": "#a7020233",
    "diffEditor.border": "#444444",
  };

  const mergeConflicts: MergeConflictsColors = {
    "merge.currentHeaderBackground": "#367366",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#28384B",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
  };

  const editorWidget: EditorWidgetColors = {
    // Editor Hover Widget
    // "editorHoverWidget.foreground": tokens.color.gray[220],
    // "editorHoverWidget.background": tokens.m3.surfaceContainer,//tokens.color.gray[780],
    // "editorHoverWidget.border": tokens.color.gray[630],
    // Editor Suggest Widget
    // "editorSuggestWidget.background": tokens.color.gray[620],
    // "editorSuggestWidget.border": tokens.color.gray[630],
    // "editorSuggestWidget.foreground": tokens.color.gray[280],
    // "editorSuggestWidget.highlightForeground": tokens.color.blue[420],
    // "editorSuggestWidget.selectedBackground": chroma(tokens.color.red[800]).alpha(0.3294).hex(),
  };

  const editor: EditorColors = {
    "editor.background": chroma(tokens.m3.surface).hex(),
    "editor.foreground": chroma(tokens.m3.onSurface).hex(),

    // Selection and Hover colors
    // ↓ Word under cursor with write-access (e.g., cursor on variable name being modified)
    "editor.wordHighlightStrongBackground": "#00000000", //chroma(tokens.palette.white).alpha(0.1).hex(),
    // ↓ When you select text with cursor (e.g., <span>selected text</span>)
    "editor.selectionBackground": chroma(tokens.m3.primary).darken(1).hex(),
    // ↓ Text under hover widget (e.g., hovering over <button> to see definition)
    "editor.hoverHighlightBackground": chroma(tokens.m3.secondary).alpha(0.4).hex(),
    // ↓ Word under cursor, single-click (e.g., cursor on <div>, all <div> highlighted)
    "editor.wordHighlightBackground": chroma(tokens.palette.white).alpha(0.1).hex(),
    // ↓ Other occurrences of selected text (e.g., selecting "foo" highlights all "foo")
    "editor.selectionHighlightBackground": chroma(tokens.m3.surface).brighten(1.5).alpha(0.2).hex(),
    // ↓ Current line where cursor is (e.g., cursor on line 42, entire line highlighted)
    "editor.lineHighlightBackground": chroma(tokens.m3.surface).brighten(0.4).alpha(0.6).hex(),
    // "editorLink.activeForeground": tokens.canvas.active.foreground,

    // Errors and Warnings
    // "editorError.foreground": tokens.canvas.error.foreground, // error squiggles
    // "editorError.background": chroma(tokens.canvas.error.bg).alpha(0.25).hex(),
    "editorError.border": "#00000000",

    // "editorWarning.foreground": tokens.canvas.warning.foreground,
    // "editorWarning.background": chroma(tokens.canvas.warning.bg).alpha(0.25).hex(),
    "editorWarning.border": "#00000000",

    // "editorInfo.foreground": tokens.canvas.info.foreground,
    // "editorInfo.background": chroma(tokens.canvas.info.bg).alpha(0.25).hex(),
    "editorInfo.border": "#00000000",

    // Gutter
    "editorGutter.background": chroma(tokens.m3.surface).hex(),
    "editorLineNumber.foreground": chroma(tokens.m3.onSurface).darken(2).hex(),
    "editorLineNumber.activeForeground": chroma(tokens.m3.onSurface).brighten(0.3).hex(),
  };

  return {
    ...baseColors,
    ...activityBar,
    ...notifications,
    ...peekView,
    ...sideBar,
    ...listsAndTrees,
    ...statusBar,
    ...editorGroupsAndTabs,
    ...breadcrumbs,
    ...integratedTerminal,
    ...titleBar,
    ...git,
    ...diffEditor,
    ...mergeConflicts,
    ...editorWidget,
    ...editor,
  };
};
