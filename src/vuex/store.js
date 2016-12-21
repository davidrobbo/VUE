import Vue from "vue";
import Vuex from "vuex";
import Basket from './basket.js'

Vue.use(Vuex)
export default new Vuex.Store({
 state: 
 {
   products: 
   [
      {
        id: 1,
        name: "Product A",
        desc: "Product A description here",
        price: 10,
        categories: [2]

      },
      {
        id: 2,
        name: "Product B",
        desc: "Product B description here",
        price: 11,
        categories: [1]

      },  
      {
        id: 3,
        name: "Product C",
        desc: "Product C description here",
        price: 12,
        categories: [1, 2]
      }  
   ],

   basket: 
   [
   ],

   filters: 
   [
      {
        name: "Category",
        id: 1,
        options: ['Cat1', 'Cat2', 'Cat3'],
        active: false
      },
      {
        name: "Sale",
        id: 2,
        options: [],
        active: false
      }
   ],

   activeFilter: null
 },
 mutations: {
   REMOVE_PRODUCT(state, i){
    state.basket.splice(i, 1);
   },
   UPDATE_BASKET(state, i){
      const product = state.products[i];

      // if basket empty, add and quant 1

      if ( ! state.basket.length ) {
        //product.quantity = 1;
        state.basket.push(product);
        Vue.set(state.basket[state.basket.length-1], 'quantity', 1);
        return true;
      }

      let itemExists = false;
      state.basket.forEach(function(item){
        if ( item.id == product.id ) {
          item.quantity++;
          itemExists = true;
        } 
      });

      if (!itemExists){
        state.basket.push(product);
        Vue.set(state.basket[state.basket.length-1], 'quantity', 1);
      }
   },
   INC_QUANT(state, i){
      state.basket[i].quantity = state.basket[i].quantity+1
   },
   DEC_QUAN(state, i){
       if (state.basket[i].quantity == 1) {
           state.basket.splice(i, 1);
       } else {
           state.basket[i].quantity = state.basket[i].quantity-1
       }
   },
   DEL(state, i){
      state.quotes.splice(i, 1)
   },
   ACT_FIL(state, id){
      state.activeFilter = id
   },
   ADD_NEW_PROD(state, prod){
      state.products.push(prod)
   }
  },
 actions: {
    updateBasket({commit}, i){
     commit("UPDATE_BASKET", i)
    },
    removeProduct({commit}, i){
      commit("REMOVE_PRODUCT", i)
    },
     decreaseQuantity({commit}, i){
        commit("DEC_QUAN", i)
     },
     increaseQuantity({commit}, i){
         commit("INC_QUANT", i)
     },
     updateActiveFilter({commit}, id){
        commit("ACT_FIL", id)
     },
     addNewProduct({commit}, product){
      return new Promise(function(resolve, reject){
        Vue.http.post("/api/product/create", {product: product}).then(function(res){
          commit("ADD_NEW_PROD", res.data.product);
          resolve(res.data);
        }).catch(function(err){
          reject(err);
        });
      });
     }
 },
 getters: {
    basketItemCount: state => {
      return state.basket.length
    },
    basketQuantity: state => {
        return state.basket.reduce(function(zero, obj){ return zero + obj.quantity; }, 0);
    },
    activeProducts: (state, getters) => {
      return !state.activeFilter ? state.products : state.products.filter((product) => { return product.categories.indexOf(state.activeFilter) >= 0 } )
    }
 }
})