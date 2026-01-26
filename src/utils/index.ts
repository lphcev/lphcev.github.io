export enum ThemeModeEnum {
  DEFAULT = 'default',
  DARK = 'dark',
}

export const THEME_LOCAL_STORAGE_KEY = 'theme'

export const getLocalStorageTheme = (): string | null => {
  return localStorage.getItem(THEME_LOCAL_STORAGE_KEY)
}

export const setLocalStorageTheme = (theme: ThemeModeEnum): void => {
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
}

export const applyTheme = (theme: ThemeModeEnum): void => {
  document.documentElement.classList.toggle(theme)
}

export const initializeThemeScript = `if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.toggle('dark')`
