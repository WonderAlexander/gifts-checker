vue<script setup>
import * as XLSX from 'xlsx'
import { ref } from 'vue'
import { XlsxRead, XlsxJson }  from '../../node_modules/vue3-xlsx'
import { useGiftsrStore } from '../stores/gifts'
const store = useGiftsrStore();

const file = ref(null)


function onChange(event) {
    file.value = event.target.files ? event.target.files[0] : null;
}

</script>

<template>
<section>
<xlsx-read :file="file">
  <xlsx-json :sheet="selectedSheet">
    <template #default="{collection}">
      <div style="position: relative;">
          <label class="input-file">
            <input type="file" name="file" @change="onChange">		
            <span>Выберите файл</span>
          </label>
          <button @click="store.toArr(collection)">Импорт</button>
      </div>
    </template>
  </xlsx-json>
</xlsx-read>
</section>
</template>


<style scoped>
button {
  height: 42px;
  display: inline-block;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #fff;
  background-color: #ff0000;
  font-size: 16px;
  padding: 5px 16px;
  border-radius: 8px;
  border: 1px solid #ff0000;
  margin-right: 15px;
}
.input-file {
	position: relative;
	display: inline-block;
}
.input-file span {
	color: #808080;
  margin-right: 15px;
}
.input-file input[type=file] {
	position: absolute;
	z-index: -1;
	opacity: 0;
	display: block;
	width: 0;
	height: 0;
}
 
/* Focus */
.input-file input[type=file]:focus + span {
	box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
 
 
/* Disabled */
.input-file input[type=file]:disabled + span {
	background-color: #eee;
}
</style>