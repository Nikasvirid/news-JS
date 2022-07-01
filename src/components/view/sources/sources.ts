import './sources.css';

class Sources {
    draw(data) {
        
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone =(document.getElementById ('sourceItemTemp')as HTMLTemplateElement).content.cloneNode(true);
            if(sourceClone===null){
                throw Error('error')
            }
            const SourceItemName = sourceClone.querySelector('.source__item-name') as HTMLTemplateElement | null;
            if(SourceItemName===null)
            {
                throw Error('error');
            }
            SourceItemName.textContent = item.name;
            const SourceItem = sourceClone.querySelector('.source__item')as HTMLElement ;
            SourceItem.setAttribute('data-source-id', item.id);
            
            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
