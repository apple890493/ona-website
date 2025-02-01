export const formatNumber = (value: number, locale: string = 'zh-TW'): string => {
  return new Intl.NumberFormat(locale).format(value)
}
