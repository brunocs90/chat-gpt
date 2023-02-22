'use client';
import { useId } from 'react';
import Creatable from 'react-select';
import useSWR from 'swr';

const fetchModels = () => fetch('/api/getEngines').then(res => res.json());

function ModelSelection() {
    const { data: models, isLoading } = useSWR('models', fetchModels);
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003',
    });
    const customStyles = {
        option: (defaultStyles: any, state: { isSelected: any }) => ({
            ...defaultStyles,
            color: state.isSelected ? '#434654' : '#fff',
            backgroundColor: state.isSelected ? '#a0a0a0' : '#434654',
        }),

        control: (defaultStyles: any) => ({
            ...defaultStyles,
            backgroundColor: '#434654',
            border: '#434654',
        }),
        singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
    };

    return (
        <Creatable
            className="mt-2"
            options={models?.modelOptions}
            defaultValue={{ label: 'text-davinci-003', value: 'text-davinci-003' }}
            placeholder={model}
            isSearchable
            instanceId={useId()}
            noOptionsMessage={() => 'name not found'}
            menuPosition="fixed"
            styles={customStyles}
            onChange={e => setModel(e?.value)}
        ></Creatable>
    );
}

export default ModelSelection;
