<script>
  export default {
    name: 'Tabs',
    props: {
      value: {
        type: [String,Number],
        required: true
      }
    },
    render () {
      return {
        <div class="tabs">
          <ul class='tabs-header'>
            {this.$slot.default}
          </ul>
        </div>
      }
    }
  }
</script>