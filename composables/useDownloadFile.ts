interface DownloadFileOptions {
  useCache?: boolean
}

export const useDownloadFile = (fileUrl: string, filename?: string) => {
  const file = ref<Blob|null>()

  const blobUrl = computed(() => file.value ? URL.createObjectURL(file.value) : null)

  const getFile = async () => {
    const response = await fetch(fileUrl)
    return await response.blob()
  }

  const download = async (options: DownloadFileOptions = {}) => {
    const { useCache = true } = options

    if (!file.value || !useCache) {
      file.value = await getFile()
    }

    let $a: HTMLAnchorElement|null = document.createElement('a')
    $a.href = blobUrl.value!
    $a.download = filename || fileUrl.split('/').reverse()[0]
    $a.click()
    $a = null
  }

  return { download }
}
