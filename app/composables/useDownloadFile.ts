interface DownloadFileOptions {
  useCache?: boolean;
}

export const useDownloadFile = (
  fileUrl: Ref<string> | ComputedRef<string>,
  filename?: string,
) => {
  const file = ref<Blob | null>();

  const blobUrl = computed(() =>
    file.value ? URL.createObjectURL(file.value) : null,
  );

  const getFile = async () => {
    const response = await fetch(fileUrl.value);
    return await response.blob();
  };

  const download = async (options: DownloadFileOptions = {}) => {
    const { useCache = true } = options;

    if (!file.value || !useCache) {
      file.value = await getFile();
    }

    let $a: HTMLAnchorElement | null = document.createElement("a");
    $a.href = blobUrl.value!;
    $a.download = filename || fileUrl.value.split("/").reverse()[0];
    $a.click();
    $a = null;
  };

  return { download };
};
