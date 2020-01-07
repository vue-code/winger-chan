<template>
    <v-form v-model="add">
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field 
                    v-model="aa"
                    :rules="aaRules"
                    label="Number"
                    required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="1" align="center">+</v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                    v-model="bb"
                    :rules="bbRules"
                    label="Number"
                    required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="1" align="center">=</v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                    v-model="result"
                    label="Result"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>

        <v-col align="center">
            <v-btn class="m-4" @click="Add" color="success">Add</v-btn>
        </v-col>
    </v-form>
</template>>

<script>
export default {
    data: () => ({
        aa: '',
        bb: '',
        result: '',
        aaRules: [
            v => !!v || 'Number is required',
            v => /[0-9]/.test(v) || 'Please input a number'
        ],
        bbRules: [
            v => !!v || 'Number is required',
            v => /[0-9]/.test(v) || 'Please input a number'
        ]
    }),
    methods: {
        Add() {
            this.result = parseInt(this.aa) + parseInt(this.bb);
        }
    }
}
</script>>
