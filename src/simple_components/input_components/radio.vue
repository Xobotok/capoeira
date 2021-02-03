<template>
    <div class="custom-radio">
        <label :for="id">{{text}}</label>
        <label :for="id" class="mask">
            <div class="mask-circle"></div>
        </label>
        <input type="radio" style="display: none" :value="value" :name="name" :id="id"
               class="input-radio" @change="updateOption({name, value})">
    </div>
</template>
<script>
  import helper from '../../helper'
  import constants from '../../constants'
  export default {
    name: 'radio',
    components: {},
    props: ['value', 'text', 'change', 'name', 'id'],
    data() {
      return {
        selectedOption: {
          text: this.text,
          val: this.value,
        },
        active: 0,
      }
    },
    methods: {
      updateOption(option) {
        var current_val = option.value;
        var inputs = $('[name="' + this.name+ '"]');
        for(var i = 0; i < inputs.length; i++) {
          $(inputs[i]).parent().removeClass('active');
        }
        $('#select-'+current_val).parent().addClass('active');
        this.change(option);
      }
    },
    mounted(){
      var inputs = $('[name="' + this.name+ '"]');
      $(inputs[0]).attr('checked', 'true');
      $(inputs[0]).parent().addClass('active');
    }
  };
</script>
<style lang="less">
    @background: #E5E5E5;
    @background_workspace: white;
    @elements: #0093d4;
    @main_text: #1a181c;
    @light_text: #b2b3b4;
    @link_text: #8cacd0;
    .custom-radio {
        display: flex;
        label {
            color: @light_text;
        }
    }
    .active {
    .mask-circle {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: @elements;
    }
    }
    .mask {
        width: 14px;
        height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 2px solid @elements;
        margin-left: 7px;

    }

</style>
