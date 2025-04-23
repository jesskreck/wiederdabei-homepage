<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';
	import { t } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';

	let email = '';
	let submitted = false;
	let errorMessage = '';
	let successMessage = '';
	let isSubmitting = false;
	let translations = {}; // Lokaler Wert für Übersetzungen

	// Store-Subscription in onMount
	onMount(() => {
		const unsubscribe = t.subscribe(value => {
			translations = value;
		});
		
		return unsubscribe;
	});

	function validateEmail(email: string): boolean {
		const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return pattern.test(email);
	}

	async function handleSubmit() {
		event?.preventDefault();
		
		if (!validateEmail(email)) {
			errorMessage = 'Bitte gib eine gültige E-Mail-Adresse ein.';
			return;
		}

		errorMessage = '';
		try {
			const response = await fetch('/api/email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});
			const result = await response.json();
			if (!result.success) {
				errorMessage = result.error || 'Fehler beim Speichern der E-Mail.';
				return;
			}
			successMessage = 'Danke! Wir werden uns schnellstmöglich bei dir melden.';
			submitted = true;
			email = '';
		} catch (err) {
			errorMessage = 'Fehler beim Speichern der E-Mail.';
		}
	}
	
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div
		class="hero min-h-screen pt-16 pb-24 [background:radial-gradient(125%_100%_at_50%_35%,#fff_10%,var(--color-primary)_50%)] md:pt-24 md:pb-32"
	>
		<div class="container mx-auto px-4">
			<div class="text-primary-content mx-auto max-w-4xl text-center">
				<button 
					class="btn btn-outline btn-sm btn-round mb-20"
					onclick={() => scrollToSection('vorhaben')}
				>
					{$t.hero.button} <span aria-hidden="true">&rarr;</span>
				</button>
				<h1 class="mb-15 text-4xl font-bold md:text-5xl lg:text-6xl">
					<TypeWriter texts={[$t.hero.title]} />
				</h1>
				<p class="mx-auto mb-25 max-w-3xl text-xl opacity-90 md:text-2xl">
					{@html $t.hero.subtitle}
				</p>
				<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
					<button 
						class="btn btn-secondary btn-xl btn-wide animate-bounce"
						onclick={() => scrollToSection('email-neuanfang')}
					>
						{$t.hero.cta.primary}
					</button>
					<button 
						class="btn btn-outline btn-lg"
						onclick={() => scrollToSection('email-form')}
					>
						{$t.hero.cta.secondary}
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Beispiele Section -->
	<section class="bg-white py-25">
		<div class="container m-auto w-full max-w-3xl px-6">
			<div class="grid grid-cols-2 gap-4">
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title1}
						</div>
						<div class="card-title">{$t.examples.subtitle1}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description1}</div>
					</div>
				</div>
				
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title2}
						</div>
						<div class="card-title">{$t.examples.subtitle2}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description2}</div>
					</div>
				</div>
				
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title3}
						</div>
						<div class="card-title">{$t.examples.subtitle3}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description3}</div>
					</div>
				</div>
				
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title4}
						</div>
						<div class="card-title">{$t.examples.subtitle4}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description4}</div>
					</div>
				</div>

				<button 
				onclick={() => scrollToSection('email-neuanfang')}
				class="card bg-secondary text-secondary-content col-span-2 mt-5 text-center shadow-lg">
					<div class="card-body">
						<div class="text-lg font-bold">{$t.examples.card.title}</div>
						<div class="text-lg">{$t.examples.card.subtitle}</div>
						<div class="mt-5 text-3xl font-bold">
							{$t.examples.card.cta}
						</div>
					</div>
				</button>
			</div>
		</div>
	</section>

	<!-- Email Form Section -->
	<section id="email-form">
		<div class="bg-primary m-auto w-full py-16">
			<div class="m-auto grid grid-cols-1 gap-12 p-6 lg:grid-cols-2 lg:p-30">
				<div class="card bg-base-100 shadow lg:p-10">
					<div class="card-body">
						<h2 class="card-title mb-6 text-3xl font-bold md:text-4xl">{$t.form.title}</h2>
						<div class="mb-5">
							<p class="mb-3">
								{$t.form.description1}
							</p>
							<p class="text-primary text-lg">
								{@html $t.form.description2}
							</p>
						</div>
						<ul class="mb-5 space-y-4 text-lg">
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>{@html $t.form.benefits.job}</span>
							</li>
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>{@html $t.form.benefits.coach}</span>
							</li>
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>{@html $t.form.benefits.training}</span>
							</li>
						</ul>
						<p class="text-primary text-lg">
							{@html $t.form.cta}
						</p>
					</div>
				</div>
				<div class="card bg-white shadow lg:p-10" id="email-neuanfang">
					<div class="card-body">
						<h2 class="text-primary-content mb-6 h-30 text-3xl font-bold md:text-4xl xl:h-18">
							<TypeWriter texts={[$t.emailForm.title]} />
						</h2>
						<p class="text-primary-content space-y-4 text-lg">
							{@html $t.emailForm.description}
						</p>

						<form onsubmit={handleSubmit}>
							<fieldset class="fieldset p-4">
								<label class="label" for="email">{$t.emailForm.email}</label>
						
								<input
									type="email"
									id="email"
									class="input bg-secondary/10 text-neutral w-full {errorMessage ? 'input-error' : ''}"
									placeholder={$t.emailForm.placeholder}
									bind:value={email}
									required
								/>
								
								{#if errorMessage}
									<div class="text-error text-sm mt-1">{errorMessage}</div>
								{/if}
								
								{#if successMessage}
									<div class="text-success text-sm mt-1">{successMessage}</div>
								{/if}
								
								<button 
									type="submit" 
									class="btn btn-secondary btn-lg mt-2 w-full"
									disabled={isSubmitting}
								>
									{#if isSubmitting}
										<span class="loading loading-spinner"></span>
									{:else}
										{@html $t.emailForm.submit}
									{/if}
								</button>
								<p>{$t.emailForm.privacy}</p>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Value Chain Section -->
	<section class="bg-white py-25">
		<div class="container m-auto w-full max-w-3xl px-6">
			<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-neutral">
				<li>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-3xl font-bold">{$t.timeline.step1.title}</div>
						{$t.timeline.step1.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end md:mb-10">
						<div class="text-3xl font-bold">{$t.timeline.step2.title}</div>
						{$t.timeline.step2.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-3xl font-bold">{$t.timeline.step3.title}</div>
						{$t.timeline.step3.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end md:mb-10">
						<div class="text-3xl font-bold">{$t.timeline.step4.title}</div>
						{$t.timeline.step4.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-3xl font-bold">{$t.timeline.step5.title}</div>
						{$t.timeline.step5.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end md:mb-10">
						<div class="text-3xl font-bold">{$t.timeline.step6.title}</div>
						{$t.timeline.step6.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-3xl font-bold">{$t.timeline.step7.title}</div>
						{$t.timeline.step7.description}
					</div>
				</li>
			</ul>
		</div>
		<div class="container text-center mx-auto">
			<button
				class="btn btn-secondary btn-xl btn-wide"
				onclick={() => scrollToSection('email-form')}
			>
				{$t.timeline.cta}
			</button>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="px-6 py-40">
		<div class="container m-auto space-y-2">
			<h2 class="mb-6 text-center text-4xl font-bold xl:text-5xl">{$t.faq.title}</h2>
			{#each $t.faq.items as faq}
				<div class="collapse-arrow border-base-300 text-primary-content collapse border bg-white">
					<input type="radio" name="faq" />
					<div class="collapse-title font-semibold">{faq.question}</div>
					<div class="collapse-content text-sm">{faq.answer}</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Vorhaben Section -->
	<section id="vorhaben" class="relative bg-white py-16">
		<div
			class="absolute inset-0 bg-[radial-gradient(var(--color-neutral-content),transparent_1.5px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
		[background-size:10px_10px]"
		></div>
		<div
			class="text-primary-content mx-auto space-y-4 px-10 pt-16 pb-24 md:pt-24 md:pb-32 md:text-center xl:max-w-3xl xl:text-lg"
		>
			<h2 class="text-primary mb-6 text-center text-4xl font-bold xl:text-5xl">{$t.vorhaben.title}</h2>
			<p>
				{$t.vorhaben.description1}
			</p>
			<p>
				{@html $t.vorhaben.description2}
			</p>
			<p>
				{@html $t.vorhaben.description3}
			</p>
			<div class="card bg-primary text-primary-content">
				<div class="card-body">
					<p class="text-lg">
						{@html $t.vorhaben.callout}
					</p>
				</div>
			</div>
			<div class="collapse-plus border-base-300 text-primary-content collapse border bg-white">
				<input type="checkbox" name="faq" />
				<div class="collapse-title">{$t.vorhaben.pat.title}</div>
				<div class="collapse-content space-y-2 text-left text-sm">
					<p>
						{$t.vorhaben.pat.p1}
					</p>

					<p>
						{@html $t.vorhaben.pat.p2}
					</p>

					<p class="mt-5"><strong>{$t.vorhaben.pat.special}</strong></p>
					<ul class="list-inside list-disc space-y-2">
						{#each $t.vorhaben.pat.benefits as benefit}
							<li>{benefit}</li>
						{/each}
					</ul>

					<p class="mt-5">
						<strong>{$t.vorhaben.pat.mission}</strong>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-25 px-4">
		<div class="container m-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">{$t.cta.title}</h2>
			<p class="mb-8 text-xl">
				{$t.cta.description}
			</p>
			<button 
				class="btn btn-secondary animate-bounce btn-lg btn-wide"
				onclick={() => scrollToSection('email-form')}
			>
				{$t.cta.button}
			</button>
		</div>
	</section>

	<!-- Footer Section -->
	<section class="bg-base-300 py-5">
		<div class="text-center text-sm">
			<a class="link link-hover" href="/impressum">{$t.footer.legal}</a>
		</div>
	</section>
</div>