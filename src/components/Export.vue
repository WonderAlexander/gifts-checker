<script setup>
    import * as XLSX from 'xlsx'
    import { ref } from 'vue'
    import { XlsxWorkbook, XlsxSheet, XlsxDownload }  from '../../node_modules/vue3-xlsx'
    import { useGiftsrStore } from '../stores/gifts'
    const store = useGiftsrStore();
    const arr = ref(store.gifts)

    const sheets = [{ name: "Выгрузка", data: '' }]
</script>

<template>

      <xlsx-workbook>
        <xlsx-sheet
          :collection="store.gifts"
          v-for="sheet in sheets"
          :key="sheet.name"
          :sheet-name="sheet.name"
        />
        <xlsx-download>
          <button>Экспорт</button>
        </xlsx-download>
      </xlsx-workbook>
</template>


<style scoped>
  button {
    height: 42px;
    display: inline-block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #ff0000;
    font-size: 16px;
    padding: 5px 16px;
    border-radius: 8px;
    border: 1px solid #ff0000;
  }
</style>