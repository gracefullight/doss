export async function shareUrl(title: string, url: string) {
  try {
    await navigator.share({
      title,
      url: `https://doss.gracefullight.dev/${url}`,
    });
  } catch (error) {
    console.warn("Sharing failed", error);
  }
}
