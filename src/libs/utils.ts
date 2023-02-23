export async function delay(time: number) {
  await (await import('timers/promises')).setTimeout(time)
}
