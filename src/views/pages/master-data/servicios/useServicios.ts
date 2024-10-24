import { ref } from "vue";

export const useServicios = () => {

    const servicios = ref();
    const editingRows = ref([]);
    const selectedServicios = ref();

    const onRowEditSave = (event) => {
      let { newData, index } = event;
  
      servicios.value[index] = newData;
  };

  servicios.value = [
  {
    "id": 1,
    "servicio": "Cardiología"
  },
  {
    "id": 2,
    "servicio": "Neurología"
  },
  {
    "id": 3,
    "servicio": "Gastroenterología"
  },
  {
    "id": 4,
    "servicio": "Dermatología"
  },
  {
    "id": 5,
    "servicio": "Endocrinología"
  }
];

return {
    servicios,
    editingRows,
    onRowEditSave,
    selectedServicios
}

};