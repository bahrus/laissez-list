import {TransformPlugins} from 'trans-render/lib/types';
import {EndUserProps as BeLazyVirtualProps} from 'be-lazy/types';
import {SimpleWCInfo} from 'may-it-be/SimpleWCInfo';
declare class WeakRef<T>{}
export interface EndUserProps{
    itemHeight: number,
    totalRows: number,
    items: any[],
    minItemHeight: number,
    isC: boolean,
    topIndex: number,
    containerScrollTop: number,
    rowTransform: any,
    rowTransformPlugins: TransformPlugins,
    timestampKey?: string,
    list: any[];
    newList: boolean;
    lastScrollPos: number;
    //styleTemplate: HTMLTemplateElement;
    rowTemplate: HTMLTemplateElement;
    pageSize: number;
    rowIntersectionalSettings: Partial<BeLazyVirtualProps>;
}

export interface Actions{
    //setFocus(self: this): void;
    onList(self: this): {
        totalRows: number,
        newList: boolean,
    }
    createVirtualList(self: this): void;

}

/**
 * xtal-vlist provides a declarative "lazy loading" list web component.
 */
export abstract class LaissezList implements SimpleWCInfo<EndUserProps>{
    src: './laissez-list.js';
    tagName: 'laissez-list';
    props: EndUserProps;
    methods: Actions;
}

export type Package = [LaissezList];

