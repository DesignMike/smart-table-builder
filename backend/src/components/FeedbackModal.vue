<template>
  <div class="modal-container">
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!--content-->
      <div class="mx-4 w-full rounded-lg bg-gray-100 md:w-1/2 lg:w-1/3">
        <!--MODAL HEADER-->
        <div
          class="items center flex justify-between border-b bg-white border-gray-200"
        >
          <div class="flex items-center justify-center">
            <h5 class="px-6 py-4 text-base my-2 font-semibold">
              Send Support Request
            </h5>
          </div>
          <div
            class="my-2 mx-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 font-sans text-gray-500 hover:bg-gray-500 hover:text-gray-300"
            @click="handleModalClose()"
          >
            x
          </div>
        </div>
        <!--MODAL BODY-->
        <div v-if="postSubmission" class="my-4 px-4">
          <h5>Thank you!</h5>
        </div>
        <div v-if="!postSubmission" class="my-4 px-4">
          <form @submit.prevent="submitFeedback">
            <div class="mb-5">
              <label for="name" class="mb-3 block font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                v-model="formData.name"
                id="name"
                placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label for="email" class="mb-3 block font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="formData.email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label for="subject" class="mb-3 block font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                v-model="formData.subject"
                placeholder="Enter your subject"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label for="message" class="mb-3 block font-semibold">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                v-model="formData.message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                <i v-if="loading" class="gg-spinner" />
                <span v-if="!loading">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black" />
  </div>
</template>
<style>
.gg-spinner {
  transform: scale(var(--ggs, 1));
}
.gg-spinner,
.gg-spinner::after,
.gg-spinner::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
}

.gg-spinner::after,
.gg-spinner::before {
  content: '';
  position: absolute;
  border-radius: 100px;
}

.gg-spinner::before {
  animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
  border: 3px solid transparent;
  border-top-color: currentColor;
}

.gg-spinner::after {
  border: 3px solid;
  opacity: 0.2;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
<script>
export default {
  data() {
    return {
      loading: false,
      postSubmission: false,
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {
    toggleLogingState() {
      this.loading = !this.loading;
    },
    async submitFeedback() {
      const url = new URL(window.location.origin + wp.ajax.settings.url);
      url.searchParams.append(
        'action',
        'sprdsh_send_feedback_or_support_query',
      );
      url.searchParams.append('nonce', this.$store.state.backendConfig.nonce);
      this.loading = true;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      });
      this.loading = false;
      this.postSubmission = true;
      setTimeout(() => {
        this.$store.commit('setFeedbackModalStatus', false);
      }, 3000);
    },
    handleModalClose() {
      this.$store.commit('setFeedbackModalStatus', false);
    },
  },
};
</script>
