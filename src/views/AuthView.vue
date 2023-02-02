<template>
	<main class="flex align-items-center justify-content-center h-screen">
		<div class="surface-card p-4 shadow-2 border-roun lg:w-2">
			<div class="text-center mb-5">
				<img src="../assets/images/emblem.png" alt="Эмблема" height="50" class="mb-3" />
				<div class="text-900 text-2xl font-medium mb-3">Авторизация</div>
			</div>

			<div>
				<label for="username" class="block text-900 font-medium mb-2">Имя пользователя</label>
				<InputText id="username" type="text" placeholder="Sample" class="w-full mb-3" />

				<label for="password" class="block text-900 font-medium mb-2">Пароль</label>
				<InputText id="password" type="password" placeholder="********" class="w-full mb-6" />

				<Button label="Войти" icon="pi pi-user" class="w-full" />
			</div>
		</div>
	</main>
</template>
