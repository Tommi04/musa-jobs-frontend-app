<template>
  <div :class="containerClasses" class="input-container">
      <span
        class="absolute top-0 left-0 h-full w-8 p-1 flex justify-center items-center"
        v-if="iconPosition === 'outer'">
        <font-awesom-icon
          :icon="icon"
          class="text-white text-xl"></font-awesom-icon>
      </span>
      <select 
          :class="inputClasses"
          :id="id" 
          :name="name"
          :placeholder="placeholder"
          v-on:change="$emit('input', $event.target.value)"
          v-bind:value="value">
            <option value="">{{ emptyOptionLabel }}</option>
            <option v-for="option in options" :key="option.id" :value="option.id">
              {{ option.label }}
            </option>
          </select>
          <span
            class="absolute top-0 right-0 h-full 2-8 p-1 flex justify-center items-center"
            v-if="iconPosition === 'inner'">
            <font-awesome-icon
              :icon="icon"
              class="text-white text-xl"></font-awesome-icon>>
          </span>
        
          <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'mj-select',
    props:{
        layout: {
            type: String,
            required: true,
        },
        id:{
          type: String,
          default: "",
        },
        placeholder:{
          type: String,
          default: '',
        },
        name:{
          type: String,
          default: '',
        },
        iconType:{
          type: String,
          default: ''
        },
        iconPosition:{
          type: String,
          default: ''
        },
        icon: {
          type: Array,
          default: function(){
            return [];
          }
        },
        value:{
          type: [Number, String]
          // questa proprietà value può prendere più type
        },
        hasError:{
          type: Boolean,
          default: false
        },
        emptyOptionLabel: {
          type: String,
          default: "Seleziona un valore"
        },
        options: {
          type: Array,
          default: function(){
            return [
              {
                id: {
                  type: Number,
                  required: true
                },
                label: {
                  type: String,
                  required: true
                }
              }
            ]
          }
        }
    },
    // con le computed properties posso cambiare le proprietà di ciò che esporto, dal posto in cui le esporto
    computed:{
      inputClasses: function(){
        let classes = 'appearance-none border-2 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none';
        if(this.hasError ){
          classes += 'bg-red-400 border-red-700';
        }else{

          if(this.layout === 'light'){
              classes += " bg-transparent";
          }else if (this.layout === 'dark'){
            classes += " bg-mj-blue-1";
          }
        }
        return classes;
      },
      containerClasses: function(){
        return "";
      }
    }
}
</script>

<style lang="scss" scoped>
</style>