<template>
    <Toolbar class="mb-6">
        <template #start>
            <Button label="New" icon="pi pi-plus" class="mr-2"  />
            <Button label="Delete" icon="pi pi-trash" severity="danger" />
        </template>
    </Toolbar>

    <div class="card">
        <DataTable :value="servicios"
        tableStyle="min-width: 50rem"
        v-model:editingRows="editingRows"
        editMode="row"
        dataKey="id"
        @row-edit-save="onRowEditSave"
        v-model:selection="selectedServicios">
            <template #header>
                <h1 class="font-semibold text-xl mb-4">Servicios</h1>
            </template>
            <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
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

    
    import { useServicios } from './useServicios';

    document.title = "Autogestión Médica - Servicios";

    const {
    servicios,
    editingRows,
    onRowEditSave,
    selectedServicios
    } = useServicios();

    
</script>