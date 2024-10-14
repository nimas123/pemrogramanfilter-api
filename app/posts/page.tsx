import kerudungData from "../../public/data/kerudung.json";
import CardList from "../components/Posts/CardList";

interface IKerudung {
  jenis: string;
  bahan: string;
  ukuran: string;
  warna: string;
  harga: number;
  stok: number;
}

const kerudungList = () => {
  const kerudung: IKerudung[] = kerudungData["kerudung"];

  return (
    <div>
      <p>{new Date().toLocaleDateString()}</p>
      <h1 className="text-fuchsia-300">DAFTAR KERUDUNG</h1>
      <CardList>
        {kerudung.map((item: IKerudung, index: number) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p><strong>Jenis:</strong> {item.jenis}</p>
            <p><strong>Bahan:</strong> {item.bahan}</p>
            <p><strong>Ukuran:</strong> {item.ukuran}</p>
            <p><strong>Warna:</strong> {item.warna}</p>
            <p><strong>Harga:</strong> Rp {item.harga.toLocaleString('id-ID')}</p>
            <p><strong>Stok:</strong> {item.stok}</p>
          </div>
        ))}
      </CardList>
    </div>
  );
};

export default kerudungList;
