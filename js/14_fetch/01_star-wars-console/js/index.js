console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    let data = await fetch(url);
    data;
    console.table(data);
    console.log(await data.json());
  } catch (error) {
    console.error(error);
  }
}

fetchData();
