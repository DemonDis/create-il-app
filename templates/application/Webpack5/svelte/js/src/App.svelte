<script>
	export let name;
</script>


<main>
	<h1>{name}!</h1>
	
  <div class="{{CONTAINER}}">
    <div>Name: {{ NAME }}</div>
    <div>Type: {{ TYPEWEB }}</div>
    <div>Tools build: {{ TOOLSBUILD }}</div>
    <div>Framework: {{ FRAMEWORK }}</div>
    <div>Language: {{ LANGUAGE }}</div>
    <div>CSS: {{ CSS }}</div>
  </div>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
