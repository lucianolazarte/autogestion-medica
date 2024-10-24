<template>
    <div class="card">
        <DataTable :value="pacientes" tableStyle="min-width: 50rem" v-model:editingRows="editingRows" editMode="row" dataKey="id" @row-edit-save="onRowEditSave">
            <template #header>
                <h1 class="font-semibold text-xl mb-4">Pacientes</h1>
            </template>
            <Column field="paciente" header="Paciente" sortable>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <Column field="edad" header="Edad" sortable>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <Column field="genero" header="Género" sortable>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <Column field="servicio" header="Servicio" sortable>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">

    import { usePacientes } from './usePacientes';

    document.title = "Autogestión Médica - Pacientes";

    const {
    pacientes,
    editingRows,
    onRowEditSave
    } = usePacientes();

    
</script>