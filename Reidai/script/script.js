new Vue({
  el: '#app',
  data: {
      password: '',
      passwordConfirm: ''
  },
  computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      // 入力されているかは、this.password と this.passwordConfirm で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）
      isPasswordValid() {
          return this.password && this.passwordConfirm && this.password === this.passwordConfirm;
      }
  }
});
