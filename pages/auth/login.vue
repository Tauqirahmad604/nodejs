<template>
  <div class="relative h-screen w-screen">
    <div class="video absolute inset-0 -z-10">
      <video
        class="object-cover w-full h-full"
        src="/assets/videos/login-bg.mov"
        loop
        autoplay
        muted
      />
    </div>
    <div class="container h-full flex flex-col justify-center relative">
      <div class="flex items-center justify-between gap-4">
        <div class="max-w-112.5 flex flex-col gap-y-10">
          <div class="w-62.5">
            <img
              src="/assets/images/jigsaw-logo.svg"
              alt=""
              class="size-full"
            />
          </div>
          <h1 class="text-6xl font-bold">
            <span class="text-white">Welcome to Jigsaw </span>
            <span class="text-[#57AA48]">TBook</span>
          </h1>
          <p class="text-gray-300 text-lg">
            We've done it carefully and simply. Combined with the ingredients
            makes for beautiful dashboard. It is definitely the tool you need to
            speed up your booking process.
          </p>
        </div>
        <div class="bg-white max-w-125 w-full rounded-2xl">
          <div class="flex flex-col">
            <div class="flex-shrink-0 border-b border-gray-200">
              <div class="py-7.5 px-4">
                <h3
                  class="text-[#57AA48] text-4xl text-center font-rajdhani font-bold capitalize"
                >
                  sign in
                </h3>
              </div>
            </div>
            <div class="flex-1">
              <div class="py-15 px-11">
                <UForm
                  ref="form"
                  :schema="loginSchema"
                  :state="loginFormData"
                  @submit="login"
                >
                  <div class="flex flex-col gap-y-8 mb-10">
                    <UFormGroup name="email" label="Your Email">
                      <CustomInput
                        v-model="loginFormData.email"
                        icon="icon-jigsaw-email"
                        color="gray"
                        type="email"
                      />
                    </UFormGroup>
                    <UFormGroup name="password" label="Your password">
                      <CustomInput
                        v-model="loginFormData.password"
                        icon="icon-jigsaw-password"
                        color="gray"
                        type="password"
                      />
                    </UFormGroup>
                    <!-- 
                    <UFormGroup name="select" label="select something">
                      <CustomSelect
                        icon="icon-jigsaw-test"
                        v-model="selected"
                        :options="people"
                      />
                    </UFormGroup> -->

                    <UCheckbox
                      label="Stay logged in"
                      inputClass="w-5 h-5"
                      :ui="{
                        label:
                          'text-sm font-medium text-gray-400 dark:text-gray-200',
                      }"
                      :model-value="true"
                    />
                  </div>

                  <UButton type="submit" label="Login" block>
                    <span v-if="!loginFormData.handleLoginLoader"> Login </span>
                    <span v-else> loading... </span>
                  </UButton>
                </UForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const { loginSchema } = useValidation();

const toast = useToast();

const form = ref();
const loginFormData = reactive({
  email: undefined,
  password: undefined,
  handleLoginLoader: null,
});

const { $apiFetch } = useNuxtApp();
const { setAuthHeader, accessToken } = useAuth();

async function login(credentials) {
  toast.add({
    // title: 'Click me',
    icon: "icon-jigsaw-building",
    description: "Some success message test",
  });
  loginFormData.handleLoginLoader = true;

  try {
    const { data } = await $apiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    if (data && data.status) {
      setToken(data.data.token);
      toast.add({
        // title: 'Click me',
        icon: "icon-jigsaw-building",
        description: data.message || "Some success message test",
      });
    }
  } catch (error) {
    toast.add({
      title: "Click me",
      icon: "icon-jigsaw-building",
      description: error.response.data.message || "Some error message test",
    });
  } finally {
    loginFormData.handleLoginLoader = false;
  }
}
const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];

const selected = ref(null);
</script>

<style scoped>
.video:has(video)::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    linear-gradient(
      180deg,
      rgba(41, 45, 50, 0.4) 29%,
      rgba(62, 106, 54, 0.4) 100%
    );
}
</style>
