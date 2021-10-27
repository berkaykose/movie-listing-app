import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";

describe("MovieCard.vue", () => {
  it("renders movie when passed", () => {
    const movie = { title: 'A Movie', year: '2020', poster: 'A Url'}
    const wrapper = shallowMount(MovieCard, {
      propsData: { movie },
    });

    console.log(wrapper.html());

    expect(wrapper.find(".movieTitle").text()).equal("");
    expect(wrapper.find(".movieYear").text()).equal("Published:");
    expect(wrapper.find(".moviePoster").text()).equal("");
  });

  it("Selects the movie when card is clicked", async () => {
    const movie = { title: 'A Movie', year: '2020', poster: 'A Url'}
    const wrapper = shallowMount(MovieCard, {
      propsData: { movie }
    })

    await wrapper.find('.movieCard').trigger('click');

    expect(wrapper.find(".movieTitle").text()).equal("");
    expect(wrapper.find(".movieYear").text()).equal("Published:");
    expect(wrapper.find(".moviePoster").text()).equal("");
  })
});
