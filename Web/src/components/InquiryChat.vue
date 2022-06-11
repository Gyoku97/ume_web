<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        問い合わせ
      </p>
      <v-text-field
        outlined
        v-model="name"
        label="お名前"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="email"
        :rules="[rules.email]"
        label="連絡先(メールアドレス)"
        type="email"
      ></v-text-field>
      <v-textarea
          outlined
          name="input-7-4"
          label="メッセージ"
          v-model="message"
        ></v-textarea>
      <div class="text--primary">
        3日以内連絡先のメールアドレスに返信いたします
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="sendMessage"
      >
        送信
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      name: undefined,
      email: undefined,
      message: undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      },
    }),
    methods: {
      sendMessage() {
        console.log(
          this.name,this.email,this.message,
        );
        console.log('sendMessage');
      },
    },
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>