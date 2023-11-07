<script lang="ts">
    import type { PageData } from "./$types";
    import MainNav from "../components/mainNav.svelte";

    export let data: PageData;
    console.log(data)
</script>

<MainNav/>
