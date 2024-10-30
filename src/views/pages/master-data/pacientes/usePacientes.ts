import { ref } from "vue";
import { FilterMatchMode } from '@primevue/core/api';

export const usePacientes = () => {

    const pacientes = ref();

    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

    const editingRows = ref([]);

    const onRowEditSave = (event) => {
      let { newData, index } = event;
  
      pacientes.value[index] = newData;
  };

    pacientes.value = [
  {
    "id": 1,
    "paciente": "Juan Pérez",
    "edad": 45,
    "genero": "Masculino",
    "servicio": "Cardiología"
  },
  {
    "id": 2,
    "paciente": "María López",
    "edad": 38,
    "genero": "Femenino",
    "servicio": "Neurología"
  },
  {
    "id": 3,
    "paciente": "Carlos Martínez",
    "edad": 50,
    "genero": "Masculino",
    "servicio": "Gastroenterología"
  },
  {
    "id": 4,
    "paciente": "Lucía Fernández",
    "edad": 29,
    "genero": "Femenino",
    "servicio": "Dermatología"
  },
  {
    "id": 5,
    "paciente": "Sofía García",
    "edad": 60,
    "genero": "Femenino",
    "servicio": "Endocrinología"
  }
];

return {
    pacientes,
    editingRows,
    onRowEditSave,
    filters
}

};