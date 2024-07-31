<template>
  <AuthForm @action="action" />
</template>

<script lang="ts" setup>
const action = () => {
  if (PHelp.AuthForm.IsLogin()) {
    Router.ToHome();
  }
};
</script>
