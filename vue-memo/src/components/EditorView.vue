<template>
  <div class="editor-view">
    <div v-if="memo">
      <label>ID:</label>
      <input v-model="input.id" disabled>
    </div>
    <div>
      <label>内容:</label>
      <input v-model="input.text" placeholder="メモのタイトル">
    </div>
    <div>
      <label>日付:</label>
      <input type="date" v-model="input.date">
    </div>
    <div>
      <label>タグ:</label>
      <input v-model="input.tags" placeholder="空白区切りで指定">
    </div>
    <div>
      <button @click="cancel" v-if="memo">戻る</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: {
          id: '',
          text: '',
          date: '',
          tags: ''
        }
      }
    },
    props: {
      memo: Object
    },
    created() {
      this.setMemo()
    },
    watch: {
      memo: 'setMemo'
    },
    computed: {
      tagsArr() {
        return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
      }
    },
    methods: {
      save() {
        const data = Object.assign({}, this.input, {tags: this.tagsArr})
        console.log(data)
        this.$emit('add', data)
      },
      setMemo() {
        if (this.memo) {
          Object.assign(this.input, this.memo, {tags: this.memo.tags.join(' ')})
        }
      },
      cancel() {
        this.$emit('cancel')
      }
    }
  }
</script>

