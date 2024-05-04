<script>
import {UsersApiService} from "@/tracking/services/users/users-api.service.js";
import {User} from "@/tracking/model/users/user.entity.js";

export default {
  name: "recovery-pass.component",
  title: "Recovery Password",
  data() {
    return {
      users: [],
      userService: null
    }
  },
  created(){

  },
  methods:{
    initialize() {
      console.log('created');
      this.userService = new UsersApiService();
      this.userService.getAllUsers()
          .then(response => {
            this.users = response.data.users;
            this.users = this.users.map(
                (users) => {
                  return User.toDisplayableUser(users);
                }
            );
            console.log(response.data)
          });
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>