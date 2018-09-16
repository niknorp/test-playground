import { Component, OnInit } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  description: string;
  fullStory: string;
  img: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  //
  // Hold recieved from service array of posts
  //
  public retrievedPosts: Array<Post>;

  //
  // Post to display full
  //
  public openedPost: Post;

  //
  // Is modal should be displayed
  //
  public toggleModalParent = false;

  constructor() {
    this.retrievedPosts = [
      {
        id: 1,
        title: 'Awesome title',
        description: 'The first one won\'t be very bigkjdsaflkajdshfk;hsd;faj;dsjf;kl.',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      },
      {
        id: 2,
        title: 'Awesome title',
        description: 'This one will be a lot bigger',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      },
      {
        id: 3,
        title: 'Awesome title',
        description: 'lorem sit amet ipsum dolor...',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      },
      {
        id: 4,
        title: 'Awesome title',
        description: 'lorem sit amet ipsum dolor...',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      },
      {
        id: 5,
        title: 'Awesome title',
        description: 'lorem sit amet ipsum dolor...',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      },
      {
        id: 6,
        title: 'Awesome title',
        description: 'lorem sit amet ipsum dolor...',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      },
      {
        id: 7,
        title: 'Awesome title',
        description: 'lorem sit amet ipsum dolor...',
        // tslint:disable-next-line:max-line-length
        fullStory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam provident incidunt enim corrupti quasi consequuntur? At, dolorem quam? Odio repellendus vel aperiam sapiente dolor unde veniam magnam earum doloribus.',
        img: ''
      }
    ];
  }

  ngOnInit() { }

  /**
   * Handl click on blog item
   * @param item
   */
  onItemClick(item) {
    if (item !== null) {
      this.openedPost = item;
      this.toggleModalParent = true;
    }
    if (item === null) {
      this.toggleModalParent = false;
    }
  }
}
