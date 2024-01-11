package hello

import "testing"

func TestSayHell(t *testing.T) {
	subtest := []struct{
		items  []string
		result string
	}{
		{
			result: "Hello, World!",
		},
		{
			items: []string{"Bob"},
			result: "Hello, Bob!",
		},
	}

	for _, st := range subtest{
		if s := Say(st.items); s != st.result{
			t.Errorf("wanted %s, (%v), got %s\n", st.result, st.items, s)
		}
	}
}