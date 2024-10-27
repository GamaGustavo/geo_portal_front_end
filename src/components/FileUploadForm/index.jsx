import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaGripLines } from 'react-icons/fa';  // Ícone de arraste

// Função para reordenar a lista de arquivos
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file, index) => ({
      id: `${file.name}-${index}-${Date.now()}`, // Gera um ID único e consistente para cada arquivo
      file,
      name: file.name,
      order: files.length + index + 1 // Define a ordem inicial
    }));
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (fileId) => {
    setFiles(files.filter(file => file.id !== fileId));
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Se o destino não for válido (soltar fora da área), não faz nada
    if (!destination) return;

    // Reordena a lista de arquivos
    const reorderedFiles = reorder(files, source.index, destination.index);
    
    // Atualiza o estado com a nova ordem e reordena o valor de "order"
    setFiles(
      reorderedFiles.map((file, index) => ({
        ...file,
        order: index + 1 // Atualiza a ordem após o arraste
      }))
    );
  };



  return (
    <>
      <h3>Upload de Arquivos</h3>
      <input type="file" multiple onChange={handleFileChange} />

      {files.length > 0 && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="files">
            {(provided) => (
              <table {...provided.droppableProps} ref={provided.innerRef} border="1">
                <thead>
                  <tr>
                    <th>Arraste</th>
                    <th>Nome do Arquivo</th>
                    <th>Ordem</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <Draggable key={file.id} draggableId={file.id} index={index}>
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <td {...provided.dragHandleProps}>
                            <FaGripLines style={{ cursor: 'grab' }} /> {/* Ícone de arraste */}
                          </td>
                          <td>{file.name}</td>
                          <td>{file.order}</td>
                          <td>
                            <button onClick={() => handleRemoveFile(file.id)}>Remover</button>
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tbody>
              </table>
            )}
          </Droppable>
        </DragDropContext>
      )}

       </>
  );
};

export default FileUploadForm;

