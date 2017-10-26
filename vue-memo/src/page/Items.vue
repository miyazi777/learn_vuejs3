<style lang="scss">
  .layout-items {
    display: flex;
    &-left {
      flex-grow: 1;
      overflow: scroll;
    }
    &-right {
      border-left: 1px solid #bbb;
    }
  }
</style>

<template>
  <div class="layout-items">
    <list-view class="layout-items-left" :memos="sharedState.memos" @remove="remove" @select="select"></list-view>
    <router-view class="layout-items-right" :memo="selectedMemo" @add="update" @cancel="cancel"></router-view>
  </div>
</template>

<script>
  import ListView from '../components/ListView'

  export default {
    computed: {
      sharedState() {
        return this.$store.state
      },
      selectedMemo() {
        if (this.$route.params.id !== undefined) {
          const id = parseInt(this.$route.params.id, 10)
          const memo = this.sharedState.find((memo) => {
            return memo.id === id
          })
          return memo
        }
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('removeMemo', id)
      },
      select(id) {
        this.$router.push({name: 'edit', params: {id}})
      },
      update(data) {
        this.$store.commit('updateMemo', data)
        this.$router.push({name: 'items'})
      },
      cancel() {
        this.$router.push({name: 'items'})
      }
    },
    components: {
      ListView
    }
  }
</script>
