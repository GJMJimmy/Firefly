<script lang="ts">
import type { DeviceCategory } from "@/data/devices";

interface Props {
	devices: DeviceCategory;
	emptyText: string;
	pageTitle: string;
	viewDetailsText: string;
}

let { devices, emptyText, pageTitle, viewDetailsText }: Props = $props();

const categories = Object.keys(devices);
let activeCategory = $state(categories[0] ?? "");
let activeDevices = $derived(devices[activeCategory] ?? []);
</script>

<div class="space-y-6">
	<div class="overflow-x-auto border-b border-(--line-divider)">
		<div class="flex min-w-max gap-6" role="tablist" aria-label={pageTitle}>
			{#each categories as category}
				<button
					type="button"
					role="tab"
					aria-selected={activeCategory === category}
					aria-controls="devices-panel"
					class={`border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
						activeCategory === category
							? "border-(--primary) text-(--primary)"
							: "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200"
					}`}
					onclick={() => (activeCategory = category)}
				>
					{category}
				</button>
			{/each}
		</div>
	</div>

	{#if activeDevices.length > 0}
		<div id="devices-panel" role="tabpanel" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each activeDevices as device (device.name)}
				<a
					href={device.link}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex h-full flex-col overflow-hidden rounded-xl border border-(--line-divider) bg-(--card-bg) transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-lg"
				>
					<div class="flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral-100 p-6 dark:bg-neutral-800">
						<img
							src={device.image}
							alt={device.name}
							class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<div class="flex flex-1 flex-col gap-3 p-4">
						<div class="flex items-start justify-between gap-3">
							<h2 class="whitespace-pre-line text-lg font-semibold text-neutral-900 transition-colors group-hover:text-(--primary) dark:text-neutral-100">
								{device.name}
							</h2>
							<span class="shrink-0 text-lg text-(--primary) opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">↗</span>
						</div>

						<p class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
							{device.specs}
						</p>
						<p class="flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
							{device.description}
						</p>

						<div class="flex items-center justify-between border-t border-dashed border-(--line-divider) pt-3 text-sm font-medium text-(--primary)">
							<span>{viewDetailsText}</span>
							<span aria-hidden="true">→</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<div id="devices-panel" role="tabpanel" class="py-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
			{emptyText}
		</div>
	{/if}
</div>
