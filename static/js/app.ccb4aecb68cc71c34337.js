webpackJsonp([1],{"JYb/":function(e,t){},MtHj:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("div",{staticClass:"navigation"},[t("router-link",{staticClass:"smoothies-btn",attrs:{to:{name:"Smoothies"}}},[this._v("Smoothie Maker App")]),this._v(" "),t("router-link",{staticClass:"add-smoothie-btn",attrs:{to:{name:"AddSmoothie"}}},[this._v("+")])],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App",data:function(){return{}}},a,!1,function(e){n("lUEY")},null,null).exports,s=n("/ocq"),r=n("kxiW"),d=n.n(r),m=(n("881v"),d.a.initializeApp({apiKey:"AIzaSyCn7OO5p4I0_aTH9e3ECDHA1Pm7phrx4sY",authDomain:"smoothies-470df.firebaseapp.com",databaseURL:"https://smoothies-470df.firebaseio.com",projectId:"smoothies-470df",storageBucket:"smoothies-470df.appspot.com",messagingSenderId:"385894249650",appId:"1:385894249650:web:df50a413d506fb79"}).firestore()),l={name:"Smoothies",data:function(){return{smoothies:[]}},methods:{deleteSmoothie:function(e){this.smoothies.splice(e,1),m.collection("smoothies").doc(e).delete()},editSmoothie:function(e){this.$router.push({name:"EditSmoothie",params:{id:e}})}},created:function(){var e=this;m.collection("smoothies").get().then(function(t){t.forEach(function(t){var n=t.data();n.id=t.id,e.smoothies.push(n)})})}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"smoothies"},e._l(e.smoothies,function(t,i){return n("div",{key:i,staticClass:"smoothie"},[n("h1",{staticClass:"smoothie-name"},[e._v(e._s(t.name))]),e._v(" "),n("i",{staticClass:"fas fa-edit edit",on:{click:function(n){return e.editSmoothie(t.id)}}}),e._v(" "),n("i",{staticClass:"fas fa-trash trash",on:{click:function(n){return e.deleteSmoothie(t.id)}}}),e._v(" "),n("div",{staticClass:"ingredients"},e._l(t.ingredients,function(t,i){return n("span",{key:i,staticClass:"smoothie-ing"},[e._v(e._s(t))])}),0)])}),0)},staticRenderFns:[]};var c=n("VU/8")(l,u,!1,function(e){n("ezNn")},null,null).exports,h={name:"AddSmoothie",data:function(){return{newName:null,newIng:null,newIngArray:[]}},methods:{pushIng:function(){this.newIng&&(this.newIngArray.push(this.newIng),this.newIng=null)},addSmoothie:function(){this.newName&&(m.collection("smoothies").add({name:this.newName,ingredients:this.newIngArray}),this.newName=null,this.newIngArray=[],this.$router.push({name:"Smoothies"}))},deleteIng:function(e){this.newIngArray.splice(e,1)}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-smoothie"},[n("h1",{staticClass:"title"},[e._v("Add New Smoothie Recipe")]),e._v(" "),n("form",{staticClass:"add-smoothie-form",on:{submit:function(t){return t.preventDefault(),e.addSmoothie(t)}}},[n("label",{attrs:{for:"name"}},[e._v("Smoothie Name:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text",id:"name"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),e._l(e.newIngArray,function(t,i){return n("div",{key:i,staticClass:"added-ingredients"},[n("div",{staticClass:"wrap"},[n("label",{attrs:{for:"added-ing"}},[e._v("Ingredient:")]),e._v(" "),n("i",{staticClass:"fas fa-trash trash",on:{click:function(t){return e.deleteIng(i)}}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newIngArray[i],expression:"newIngArray[index]"}],attrs:{type:"text",id:"added-ing"},domProps:{value:e.newIngArray[i]},on:{input:function(t){t.target.composing||e.$set(e.newIngArray,i,t.target.value)}}})])}),e._v(" "),n("label",{attrs:{for:"ingredient"}},[e._v("Add an ingredient:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newIng,expression:"newIng"}],attrs:{type:"text",id:"ingredient"},domProps:{value:e.newIng},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.pushIng(t))},input:function(t){t.target.composing||(e.newIng=t.target.value)}}}),e._v(" "),n("button",{staticClass:"add-smoothie-btn"},[e._v("Add Smoothie")])],2)])},staticRenderFns:[]};var v=n("VU/8")(h,p,!1,function(e){n("MtHj")},null,null).exports,f={name:"EditSmoothie",data:function(){return{smoothie:null,newName:null,newIng:null,newIngArray:[]}},methods:{pushIng:function(){this.newIng&&(this.newIngArray.push(this.newIng),this.newIng=null)},editSmoothie:function(){this.newName&&(m.collection("smoothies").doc(this.$route.params.id).update({name:this.newName,ingredients:this.newIngArray}),this.newName=null,this.newIngArray=[],this.$router.push({name:"Smoothies"}))},deleteIng:function(e){this.newIngArray.splice(e,1)}},created:function(){var e=this,t=this.$route.params.id;m.collection("smoothies").get().then(function(n){var i=n.docs.find(function(e){return e.id===t});e.smoothie=i.data(),e.newIngArray=i.data().ingredients,e.newName=i.data().name})}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-smoothie"},[n("h1",{staticClass:"title"},[e._v("Edit Smoothie Recipe")]),e._v(" "),n("form",{staticClass:"edit-smoothie-form",on:{submit:function(t){return t.preventDefault(),e.editSmoothie(t)}}},[n("label",{attrs:{for:"name"}},[e._v("Smoothie Name:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text",id:"name"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),e._l(e.newIngArray,function(t,i){return n("div",{key:i,staticClass:"added-ingredients"},[n("div",{staticClass:"wrap"},[n("label",{attrs:{for:"added-ing"}},[e._v("Ingredient:")]),e._v(" "),n("i",{staticClass:"fas fa-trash trash",on:{click:function(t){return e.deleteIng(i)}}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newIngArray[i],expression:"newIngArray[index]"}],attrs:{type:"text",id:"added-ing"},domProps:{value:e.newIngArray[i]},on:{input:function(t){t.target.composing||e.$set(e.newIngArray,i,t.target.value)}}})])}),e._v(" "),n("label",{attrs:{for:"ingredient"}},[e._v("Add an ingredient:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newIng,expression:"newIng"}],attrs:{type:"text",id:"ingredient"},domProps:{value:e.newIng},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.pushIng(t))},input:function(t){t.target.composing||(e.newIng=t.target.value)}}}),e._v(" "),n("button",{staticClass:"edit-smoothie-btn"},[e._v("Finish Edit")])],2)])},staticRenderFns:[]};var w=n("VU/8")(f,g,!1,function(e){n("JYb/")},null,null).exports;i.a.use(s.a);var _=new s.a({routes:[{path:"/",name:"Smoothies",component:c},{path:"/add-smoothie",name:"AddSmoothie",component:v},{path:"/edit-smoothie/:id",name:"EditSmoothie",component:w}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:_,components:{App:o},template:"<App/>"})},ezNn:function(e,t){},lUEY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ccb4aecb68cc71c34337.js.map