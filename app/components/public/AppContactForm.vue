<script setup lang="ts">
import * as v from 'valibot'
import type { SelectItem , FormSubmitEvent } from '@nuxt/ui'

type Schema = v.InferOutput<typeof schema>

const toast = useToast()

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(5, 'Mínimo de 5 caracteres')),
  email: v.pipe(v.string(), v.email('E-mail inválido')),
  message: v.pipe(v.string()),
  // password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

const items = ref<SelectItem[]>([
  {
    label: 'Atendimento',
    value: 'atendimento'
  },
  {
    label: 'Comercial',
    value: 'comercial'
  }
])

const state = reactive({
  name: '',
  email: '',
  company: '',
  department: 'atendimento',
  message: ''
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField
      label="Nome"
      name="name"
    >
      <UInput
        v-model="state.name"
        size="xl"
        placeholder="Digite o seu nome"
        class="w-full"
        icon="lucide:user"
      />
    </UFormField>

    <UFormField
      label="E-mail"
      name="email"
    >
      <UInput
        v-model="state.email"
        size="xl"
        placeholder="Digite seu e-mail"
        class="w-full"
        icon="lucide:at-sign"
      />
    </UFormField>

    <UFormField
      label="Empresa"
      name="company"
    >
      <UInput
        v-model="state.company"
        size="xl"
        placeholder="Nome da sua empresa"
        class="w-full"
        icon="lucide:building-2"
      />
    </UFormField>

    <UFormField
      label="Departamento"
      name="departament"
    >
      <USelect
        v-model="state.department"
        size="xl"
        :items="items"
        class="w-full"
        icon="lucide:warehouse"
      />
    </UFormField>

    <UFormField
      label="Mensagem"
      name="message"
    >
      <UTextarea
        v-model="state.message"
        :maxrows="4"
        size="xl"
        autoresize
        class="w-full"
        icon="lucide:mail"
      />
    </UFormField>

    <UButton type="submit" icon="lucide:send" size="lg" variant="outline">
      Enviar
    </UButton>
  </UForm>
</template>

