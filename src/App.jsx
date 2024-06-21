import { useState } from "react";
import "./styles.css";
import Folder from "./components/Folder";
import explorer from "./data/floderData";
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNoder = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNoder={handleInsertNoder} explorer={explorerData} />
    </div>
  );
}
