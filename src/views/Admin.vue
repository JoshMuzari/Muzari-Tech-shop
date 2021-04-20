<template>
  <div class="admin">

  </div>
</template>

<script>
// @ is an alias to /src
// import Hero from "@/components/Hero.vue";
// import {fb} from '../firebase';

export default {
  name: "admin",
  data(){
      return{
          name:null,
          email:null,
      }
  },
//   components: {
//     Hero
//   },
//   methods:{
//       closeMenu(){
//         $(".page-wrapper").toggleClass("toggled");
//       },
//       logout(){
//           fb.auth().signOut()
//           .then(() => {
//               this.$router.replace('/');
//           })
//           .catch((err) =>{
//               console.log(err);
//           });
//       }
//   },

//   created(){
//       let user = fb.auth().currentUser;
//       this.email = user.email;

//   }
 };
</script>

<style>

</style>

