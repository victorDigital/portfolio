export async function load({ fetch }) {
	const res = await fetch(`https://raw.githubusercontent.com/victorDigital/notes/main/Programmering/Logbog.md`);  
	const item = await res.text();

	return { logbog: item };
}