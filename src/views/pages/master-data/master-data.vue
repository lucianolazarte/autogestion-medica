<template>
    <div>
        <div class="layout-content-container">
            <div class="grid">
                <div class="col-6">
                    <RouterLink to="/master-data/pacientes">
                        <Card>
                            <template #content>
                                <h2 class="m-0 line-height-1 font-light">
                                    <i class="pi pi-users mr-3" style="font-size: 1.9rem"></i>Pacientes
                                </h2>
                            </template>
                        </Card>
                    </RouterLink>
                </div>
                <div class="col-6">
                    <RouterLink to="/master-data/servicios">
                        <Card>
                            <template #content>
                                <h2 class="m-0 line-height-1 font-light">
                                    <i class="pi pi-database mr-3" style="font-size: 1.9rem"></i>Servicios
                                </h2>
                            </template>
                        </Card>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    document.title = "Autogestión Médica - Master Data";
</script>